<template>
  <div class="space-y-1 mt-3 text-lg">
    <div class="text-blue font-semibold">{{ title }}</div>
    <div class="font-light">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: "JobDescriptionSection",
  props: ["title", "description"]
}
</script>