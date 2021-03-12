<template>
  <div :class="[transparent ? 'fixed' : 'bg-blue']" class="py-8 w-full">
    <div class="container container-pad mx-auto flex items-center justify-between">
      <!-- Logo Container -->
      <div class="flex-1">
        <img class="h-6" alt="Find Work logo." :src="require('../../assets/logo.svg')">
      </div>

      <!-- Nav? -->
      <div v-show="!transparent" class="relative flex items-center space-x-5">
        <img @click="avatarClicked = !avatarClicked" :src="require('../../assets/Avatar.png')" alt="User Icon." class="cursor-pointer rounded-lg">
        <div v-show="avatarClicked" @click="signout" class="hover:text-red-light cursor-pointer top-full mt-2 right-0 absolute py-3 px-5 text-lg font-thin bg-white rounded-lg">
          Signout
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { signoutUser } from '../../utils'
const {
  VUE_APP_LOGOUT_URL: LOGOUT_URL
} = process.env

export default {
  name: "Header",
  props: ["transparent"],
  data() {
    return {
      avatarClicked: false
    }
  },
  methods: {
    signout() {
      axios
        .post(LOGOUT_URL)
        .then(res => {
                signoutUser(window.localStorage);
      this.$router.push('login')
        })
    }
  }
}
</script>