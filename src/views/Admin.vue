<template>
  <Header/>
  <Hero title="Jobs." />

  <div class="">
    <div class="flex justify-between items-center space-x-5">
      <div class="">
        <input type="text">
        <input type="button" value="" class="">
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Admin/Header.vue'
  import Hero from '@/components/Hero.vue'

  export default {
    name: "Admin",
    components: { Header, Hero }
  }
</script>