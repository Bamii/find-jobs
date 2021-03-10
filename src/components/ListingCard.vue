<template>
  <div class="p-8 pb-6 shadow-lg rounded-md">
    <div class="flex flex-col lg:flex-row lg:space-x-10 text-blue justify-between text-xl font-semibold">
      <div>{{ item.title }}</div>
      <div class="font-normal">{{ item.salary }}</div>
    </div>
    <div class="pt-1 font-light">{{ item.location }}</div>
    <div class="py-3 text-sm md:text-base">
      {{ item.description }}
    </div>
    <div class="flex justify-end">
      <input
        type="button"
        value="See More"
        class="btn bg-red-light text-sm text-white font-light"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ListingCard",
  props: ['item'],

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