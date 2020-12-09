<template>
  <nav
    class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2"
  >
    <router-link class="mx-2" v-for="item in list" :to="item.to" :key="item.to">
      <a>{{ item.title }}</a>
    </router-link>
    <button v-if="isLoggedIn" class="mx-2" @click="logOut">Logout</button>
    <button v-else class="mx-2" @click="$emit('open-login-modal')">
      Login
    </button>
  </nav>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
  data() {
    return {
      list: [
        { title: "Heroes", to: "/heroes" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider Carousel", to: "/slider" },
        { title: "Calculator", to: "/calculator" },
        { title: "Modal", to: "/modal" },
        { title: "Chat", to: "/chat" },
      ],
    };
  },
  computed:{
    isLoggedIn(){
      return this.$store.state.isLoggedIn
    }
  },
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
};
</script>

<style>
</style>