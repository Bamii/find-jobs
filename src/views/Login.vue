<template>
  <Header :transparent="true" />
  <div class="flex">
    <div class="flex-1 h-screen flex-col justify-center items-start hidden md:flex container container-pad bg-blue">
      <div class="text-3xl font-bold text-white">
        Find the best <br>
        candidates for your <br>
        Organisation.
      </div>
      <img src="" alt="">
    </div>
    <div class="flex h-screen flex-1 container-pad justify-center items-center bg-blue md:bg-white">
      <div class="space-y-4 w-full p-8 md:px-20 bg-white border-2 border-blue rounded-lg md:border-0">
        <div class="font-bold text-xl text-blue">
          Login
        </div>
        <form class="space-y-4" @submit.prevent="login" action="">
          <CustomInput
            title="Email"
            label="email"
            class="flex-1"
            v-model="username"
          />
          <CustomInput
            type="password"
            title="Password"
            label="password"
            class="flex-1"
            v-model="password"
          />
          <button :disabled="loggingIn" type="submit" class="btn btn-blue py-3">
            {{ loggingIn ? 'loading...' : 'Login' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Admin/Header.vue'
import CustomInput from '@/components/CustomInput.vue'
import { loginUser } from '../utils'
import axios from 'axios'
const {
  VUE_APP_LOGIN_URL: LOGIN_URL
} = process.env

export default {
  name: "Login",
  components: {
    Header,
    CustomInput
  },
  data: function() {
    return {
      username: "",
      password: "",
      loggingIn: false,
    }
  },
  methods: {
    login() {
      this.loggingIn = true;
      axios
        .post(LOGIN_URL,
          { 
            username: this.username,
            password: this.password
          })
        .then((res) => {
          const data = res.data;
          loginUser(data.token, window.localStorage);
          this.$router.push('admin')
        })
        .catch(e => {
          console.log(e);
        })
        .finally(() => {
          this.loggingIn = false;
        })
      
    }
  }
}
</script>