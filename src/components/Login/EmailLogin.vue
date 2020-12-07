<template>
  <form class="p-2 my-2" @submit.prevent="submit">
    <div class="my-4">
      <label>Email</label>
      <input
        class="rounded shadow p-2 w-full"
        placeholder="Enter email or username"
        v-model="email"
        ref="emailRef"
      />
    </div>
    <div class="my-4">
      <label>Password</label>
      <input
        class="rounded shadow p-2 w-full"
        type="password"
        placeholder="Enter your password"
        v-model="password"
      />
    </div>
    <div class="my-4">
      <button
        class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white p-2"
        type="submit"
      >
        <span v-if="!isLoading">Login</span>
        <span v-else>⌛</span>
      </button>
    </div>
  </form>
</template>

<script>
import firebase from "../../utilities/firebase";

export default {
  props: { isLoading: { type: Boolean, required: true } },
  mounted() {
    this.$refs.emailRef.focus();
  },
  data() {
    return { email: "", password: "" };
  },
  methods: {
    submit() {
      this.$emit("update-is-loading-state", true);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.password = "";
          this.email = "";
          this.$emit("close-login-from-email");
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          this.$emit("update-is-loading-state", false);
        });
    },
  },
};
</script>

<style>
</style>