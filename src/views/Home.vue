<template>
  <Header />
  <Hero title="Find Your Dream Job." />
  <!-- search bar outer relative container -->
  <div class="relative">
    <!-- container that's to be shifted up -->
    <div class="absolute -top-20 md:-top-10 w-full">

      <!--  -->
      <div class="container container-pad mx-auto">
        <div class="w-full p-6 flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-3 rounded-lg bg-white shadow-xl">

          <CustomInput
            title="Keyword"
            label="search_text"
            placeholder="Frontend Developer"
            class="flex-1"
          />

          <CustomInput
            title="Location"
            label="search_location"
            placeholder="Lagos, Nigeria"
            class="flex-1"
            :disabled="true"
          />

          <button class="btn btn-red font-light self-end py-3">
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
  
  <!-- main page contents -->
  <div class="container mx-auto container-pad pt-80 md:pt-32">
    <Notification
      :notification="notification"
      :close="closeNotification"
    />

    <div class="flex space-x-10">
      <!-- left section -->
      <div class="flex-1">
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
          :selectJob="setSelectedJob"
          :selected_job="selected_job_index"
          :itemList="jobs_list"
        />
      </div>

      <!-- right section -->
      <div class="flex-1 hidden md:block">
        <job-details
          :job="selected_job"
          :apply="openJobModal"
        />
      </div>
    </div>
  </div>

  <Footer />

  <!-- modal -->
  <div v-show="isJobModalVisible" class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray opacity-75"></div>
      </div>

      <!-- gotten from tailwindui.com -->
      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <div class="bg-white px-4 pt-5 pb-4 sm:pt-10 sm:p-8">
          <div class="text-lg text-blue font-bold">
            {{ selected_job.title }}
          </div>
          <div class="text-sm text-blue font-semibold">
            {{ selected_job.location }}
          </div>
          
          <div class="mt-8 space-y-8">
            <div class="">
              <CustomInput
                label="first_name"
                title="First Name"
                v-model="applicant.first_name"
              />
            </div>
            
            <div class="">
              <CustomInput
                label="last_name"
                title="Last Name"
                v-model="applicant.last_name"
              />
            </div>
            
            <div class="">
              <CustomInput
                label="email"
                title="Email"
                v-model="applicant.email"
              />
            </div>
            
            <div class="">
              <CustomInput
                label="location"
                title="Location"
                v-model="applicant.location"
              />
            </div>
            
            <div class="">
              <CustomInput
                label="phone"
                title="Phone Number"
                v-model="applicant.phone"
              />
            </div>

            <div class="flex flex-col space-y-2 justify-center items-center py-24 border border-blue rounded-lg">
              <div class="text-blue">
                {{ applicant.cv && applicant.cv.name + ' has been selected!' }}
              </div>
              <label for="cv" class="btn btn-blue">
                Upload CV
              </label>
              <input
                name="cv"
                id="cv"
                type="file"
                class="w-0 h-0"
                ref="fileInput"
                accept="pdf/*"
                @change="onFilePicked"
              />
            </div>
          </div>

          <div class="w-full flex space-x-5 mt-8">
            <button @click="closeModal" class="flex-1 py-4 btn btn-red">Cancel</button>
            <button :disabled="applying" @click="applyForJob" class="flex-1 py-4 btn btn-blue">
              {{ applying ? 'applying...' : 'Submit'}}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Hero from '@/components/Hero.vue'
import Listings from '@/components/Listings.vue'
import JobDetails from '@/components/JobDetails.vue'
import CustomInput from '@/components/CustomInput.vue'
import Notification from '@/components/Notification.vue'
const JOB_LIST = require('../sample_jobs_list.json')
const {
  VUE_APP_JOBS_URL: JOBS_URL
} = process.env

export default {
  name: 'Home',
  components: {
    Header, Hero,
    Listings, Footer,
    JobDetails, CustomInput,
    Notification
  },
  data: function() {
    return {
      applying: false,
      isJobModalVisible: false,
      jobs_list: [],
      selected_job_index: 0,
      hasSearched: false,
      searchText: "",
      applicant: {
        first_name: "",
        last_name: "",
        email: "",
        location: "",
        phone: "",
        cv: null
      },
      notification: {
        show: false,
        success: true,
        message: "sdafadd"
      }
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

    axios
      .get(`${JOBS_URL}`, {
        mode: 'no-cors',
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }, { crossDomain: true })
      .then(res => {
        const data = res.data().data;
        console.log(res);
        // this.jobs_list = data;
      })
      .catch((e) => {
        console.log(e)
      })
      .finally(() => this.hasSearched = true)
  },
  methods: {
    setSelectedJob(index) {
      this.selected_job_index = index;
    },
    openJobModal() {
      const job = this.selected_job;
      this.isJobModalVisible = true;
    },
    closeModal() {
      this.isJobModalVisible = false;
    },
    applyForJob() {
      // api req
      const fd = new FormData();

      for(let field in this.applicant) {
        fd.append(field, this.applicant[field]);
      }

      this.applying = true;
      axios
        .post(`${JOBS_URL}/${this.selected_job.id}/apply`, fd)
        .then(res => {
          const d = res.data;
          if(d.status === 'success') {
            this.displayNotification(true, "Successfully applied for a job")
          } else {
            this.displayNotification(false, "An Error Occured, please try again later.")
          }
        })
        .catch(e => {
          this.displayNotification(false, "An Error Occured, please try again later.")
        })
        .finally(() => {
          this.closeModal();
          this.applying = false;
        })
    },
    displayNotification(success, message) {
      const n = {
        show: true,
        success,
        message
      }
      this.notification = n;
    },
    closeNotification() {
      const n = { show: false, success: false, message: "" }
      this.notification = n;
    },
    onFilePicked(event) {
      const files = event.target.files

      const app = this.applicant;
      this.applicant = {
        ...app,
        cv: files[0]
      }
    }
  }
}
</script>
