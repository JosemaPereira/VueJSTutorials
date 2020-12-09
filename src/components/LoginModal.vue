<template>
<div v-if="isLoginOpen">
  <section
    @click="close"
    class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 rounded shadow x-1/3">
        <div class="p-2 border">
          <h1 class="text-2xl text-center">Login</h1>
          <GoogleLogin @close-login-from-google="close" />
          <p class="my-3 text-center">Or</p>
          <EmailLogin
            :isLoading="isLoading"
            @close-login-from-email="close"
            @update-is-loading-state="updateIsLogin"
          />
        </div>
      </div>
    </div>
  </div></div>

</template>

<script>
import GoogleLogin from "../components/Login/GoogleLogin";
import EmailLogin from "../components/Login/EmailLogin";

export default {
  components: { GoogleLogin, EmailLogin },
  computed:{
    isLoginOpen(){
      return this.$store.state.isLoginOpen && !this.$store.state.authUser
      }
  },
  data() {
    return { isLoading: false };
  },
  methods: {
    close() {
      this.$store.commit('setLoginModal', false);
    },
    updateIsLogin(state) {
      this.isLoading = state;
    },
  },
};
</script>

<style>
</style>