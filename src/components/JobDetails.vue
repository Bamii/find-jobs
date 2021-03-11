<template>
  <div class="w-full shadow-md rounded-lg p-10 mt-10">
    <!-- title and salary -->
    <div class="flex flex-col lg:flex-row lg:space-x-10 text-blue justify-between text-xl font-bold">
      <div>{{ job.title }}</div>
      <div class="font-normal">{{ job.salary }}</div>
    </div>
    <!-- company -->
    <div class="text-xl">
      {{ job.company }}
    </div>
    <!-- type and work position -->
    <div class="font-light text-lg">
      <span>{{ job.type }}</span> |
      <span>{{ job.work_condition }}</span>
    </div>
    <!-- location -->
    <div class="font-light text-xl">
      {{job.location }}
    </div>


    <!-- apply button -->
    <input @click="apply" type="button" value="Apply Via Find Jobs" class="btn btn-blue font-light my-5">
    
    <!-- details section -->
    <job-description-section
      title="Description"
      :description="job.description"
    />

    <!-- benefits section -->
    <job-description-section
      title="Benefits"
      :description="job.benefits"
    />
  </div>
</template>

<script>
import JobDescriptionSection from '@/components/JobDescriptionSection.vue'

export default {
  name: "JobDetails",
  props:  ["job", "apply"],
  components: {
    JobDescriptionSection
  }
}
</script>