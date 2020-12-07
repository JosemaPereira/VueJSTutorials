<template>
  <section class="my-5 text-center">
    <button class="border px-2 rounded" @click="loginWithGoogle">
      Login with google
    </button>
  </section>
</template>

<script>
import firebase from "../../utilities/firebase";

export default {
  methods: {
    loginWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          const token = result.credential.accessToken;
          const user = result.user;
          console.log(token, user);
          this.$emit("close-login-from-google");
        })
        .catch((err) => {
          console.error(err.code, err.message);
        });
    },
  },
};
</script>

<style>
</style>