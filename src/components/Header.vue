<template>
  <div class="py-6 bg-blue">
    <div class="container container-pad mx-auto flex items-center justify-between">
      <!-- Logo Container -->
      <div class="flex-1">
        <img class="h-6" alt="Find Work logo." src="../assets/logo.svg">
      </div>

      <!-- Nav? -->
      <div class="flex items-center space-x-5">
        <div class="hidden md:block text-white">Jobs</div>
        <div class="hidden md:block text-white">Company Review</div>
        <div class="hidden md:block text-white">Find Salaries</div>
        <a class="text-current" href="/login">
          <div class="border-2 border-white text-blue btn bg-white hover:bg-blue hover:text-white">
              Post Job
          </div>
        </a>
      </div>
    </div>
  </div>
</template>