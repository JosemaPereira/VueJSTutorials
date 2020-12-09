<template>
  <Header @open-login-modal="isLoginOpen = true" />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <teleport to="body">
    <LoginModal v-if="isLoginOpen" @close-login-modal="isLoginOpen = false" />
  </teleport>
</template>

<script>
import Header from "./components/Header";
import LoginModal from "./components/LoginModal";
import firebase from "./utilities/firebase";
export default {
  components: { Header, LoginModal },
  data() {
    return {
      isLoginOpen: false
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit('setIsLoggedIn', true);
        this.$store.commit('setAuthUser', user);
      } else {
        this.$store.commit('setIsLoggedIn', false);
        this.$store.commit('setAuthUser', {});
      }
    });
  },
};
</script>