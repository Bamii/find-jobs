<template>
  <Header />
  <Hero title="Find Your Dream Job." />
  <!-- search bar outer relative container -->
  <div class="relative">
    <!-- container that's to be shifted up -->
    <div class="absolute -top-16 md:-top-10 w-full">

      <!--  -->
      <div class="container container-pad mx-auto">
        <div class="w-full p-6 flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-3 rounded-lg bg-white shadow-xl">

          <input class="text-gray border-blue-light flex-1" placeholder="Frontend Developer" type="text" name="" id="">
          <input class="text-gray flex-1" placeholder="Lagos, Nigeria" type="text" name="" id="">
          <input type="button" value="Search" class="btn bg-red-light text-white font-light">

        </div>
      </div>
      
    </div>
  </div>
  
  <!-- main page contents -->
  <div class="container mx-auto container-pad pt-48 md:pt-24">
    <div class="flex space-x-10">
      <!-- left section -->
      <div class="flex-1 h-60">
        <div class="flex mb-5 justify-between">
          <div>Showing {{ jobs_list.length }} result(s)</div>
          <div class="">
            <label for="sort">Sort By:</label>
            <select name="sort" id="sort">
              <option value="latest">Latest</option>
            </select>
          </div>
        </div>

        <!-- jobs list -->
        <Listings
          :selected-job="selected_job"
          :itemList="jobs_list"
        />
      </div>

      <!-- right section -->
      <div class="flex-1 h-60 hidden md:block">
        <job-details
          :job="selected_job"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import Listings from '@/components/Listings.vue'
import JobDetails from '@/components/JobDetails.vue'
const JOB_LIST = require('../sample_jobs_list.json')
const {
  VUE_APP_JOBS_URL: JOBS_URL
} = process.env

export default {
  name: 'Home',
  components: {
    Header, Hero,
    Listings,
    JobDetails
  },
  data: function() {
    return {
      jobs_list: [],
      selected_job_index: 0,
      hasSearched: false
    }
  },
  computed: {
    selected_job: (vm) => {
      const { jobs_list, selected_job_index } = vm
      return jobs_list[selected_job_index]
    }
  },
  created() {
    if(this.hasSearched) return
    this.jobs_list = JOB_LIST;

    // axios
    //   .get(`${JOBS_URL}`, {
    //     mode: 'no-cors',
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //   }, { crossDomain: true })
    //   .then(res => {
    //     const data = res.data().data;
    //     // this.jobs_list = data;
    //   })
    //   .catch(() => {
    //   })
    //   .finally(() => this.hasSearched = true)
      
  }
}
</script>
