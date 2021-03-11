<template>
  <div class="bg-blue">
    <div class="mt-10 py-8 container mx-auto container-pad flex justify-between flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-5">      
      <div class="flex-1 space-y-2">
        <img class="h-6" alt="Find Work logo." :src="require('../assets/logo.svg')">
        <div class="text-white">
          2021
          <span class="italic text-blue-light">FindJobs</span>
        </div>
      </div>

      <div class="flex-2 space-y-2">
        <div class="text-whie text-xl font-thin text-blue-light">Quick Links</div>
        <div class="space-y-1">
          <a href="/">
            <div class="text-white text-sm">Home</div>
          </a>
          <a href="/admin">
            <div class="text-white text-sm">Admin</div>
          </a>
          <a href="/login">
            <div class="text-white text-sm">Login</div>
          </a>
        </div>
      </div>

      <div class="flex-1 space-y-2">
        <div class="text-center text-xl text-whit font-thin text-blue-light">Social Media Links</div>
        <div class="flex justify-center space-x-2">
          <div class="h-8 w-8 p-2 bg-blue-light rounded-full flex place-content-center">
            <img :src="require('../assets/facebook_icon.svg')" alt="Facebook Icon.">
          </div>
          <div class="h-8 w-8 p-2 bg-blue-light rounded-full flex place-content-center">
            <img :src="require('../assets/twitter_icon.svg')" alt="Twitter Icon.">
          </div>
          <div class="h-8 w-8 p-2 bg-blue-light rounded-full flex place-content-center">
            <img :src="require('../assets/instagram_icon.svg')" alt="Instagram Icon.">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>