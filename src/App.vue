<template>
  <Header @open-login-modal="isLoginOpen = true" />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <LoginModal v-if="isLoginOpen" @close-login-modal="isLoginOpen = false" />
</template>

<script>
import Header from "./components/Header";
import LoginModal from "./components/LoginModal";
export default {
  components: { Header, LoginModal },
  data() {
    return {
      isLoginOpen: false,
    };
  },
};
</script>