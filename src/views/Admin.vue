<template>
  <Header/>
  <Hero title="Jobs." />

  <div class="container container-pad mx-auto mt-10">
    <div class="flex justify-between items-center space-x-5">
      <div class="px-4 py-2 rounded-lg shadow-md space-x-4">
        <input placeholder="Frontend" type="text" class="px-4 py-3">
        <input type="button" value="Search" class="bg-red-light text-white btn">
      </div>
      <div class="btn bg-red-light text-white">
        + New Job
      </div>
    </div>
  </div>

  <div class="container container-pad mx-auto mt-3 space-y-5">
    div.p-4
  </div>
</template>

<script>
  import Header from '@/components/Admin/Header.vue'
  import Hero from '@/components/Hero.vue'
  const JOB_LIST = require('../sample_admin_job_list.json')

  export default {
    name: "Admin",
    components: { Header, Hero },
    data: function() {
      return {
        jobs_list: [],
        hasSearched: false
      }
    },
    mounted: function() {
      if(hasSearched) return;
      this.jobs_list = JOB_LIST
    }
  }
</script>