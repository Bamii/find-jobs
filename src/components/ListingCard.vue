<template>
  <div :class="[inverse ? 'text-white bg-blue' : 'text-blue bg-white']" class="p-8 pb-6 shadow-lg rounded-md">
    <div  class="flex flex-col lg:flex-row lg:space-x-10 justify-between text-2xl font-semibold">
      <div>{{ item.title }}</div>
      <div class="text-xl font-normal">{{ item.salary }}</div>
    </div>
    <div class="pt-1 font-light">{{ item.location }}</div>
    <div class="pt-4 pb-3 text-sm md:text-base">
      {{ item.description }}
    </div>
    <div class="flex justify-end">
      <button @click="selectJob" class="btn btn-red text-sm font-light">
        See More
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListingCard",
  props: ['item', 'inverse', 'selectJob'],

}
</script>

// {
//   "id": 1,
//   "title": "Frontend Developer Needed",
//   "company": "Tedbree Limited",
//   "company_logo": "https://content.app-sources.com/s/14630223212260103/uploads/Logos/Tedbree-5151946.png",
//   "location": "Yaba, Lagos",
//   “category”: “Tech”,
//   "salary": "N150,000 - N200,000 Monthly",
//   "description": "Job Description goes here formatted in markdown",
//   "benefits": "Job Benefits goes here formatted in markdown",
//   "type": "Full-time",
//   "work_condition": "Part Remote",
//   "created_at": "2021-01-22 06:00:00",
//   "updated_at": "2021-01-22 06:00:00"
// }