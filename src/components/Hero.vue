<template>
  <div class="w-full bg-blue">
    <div class="text-white container container-pad mx-auto pt-16 pb-32 text-4xl font-semibold">
      {{ title }}
    </div>
  </div>
</template>

<script>
  export default {
    name: "Hero",
    props: ['title']
  }
</script>