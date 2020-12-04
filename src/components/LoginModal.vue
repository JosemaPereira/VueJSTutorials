<template>
  <section
    @click="$emit('close-login-modal')"
    class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 rounded shadow x-1/3">
        <div class="p-2 border">
          <h1 class="text-2xl text-center">Login</h1>
          <form class="p-2 my-2" @submit.prevent="submit">
            <div class="my-4">
              <label>Email</label>
              <input
                class="rounded shadow p-2 w-full"
                placeholder="Enter email
              or username"
                v-model="form.email"
              />
            </div>
            <div class="my-4">
              <label>Password</label>
              <input
                class="rounded shadow p-2 w-full"
                type="password"
                placeholder="Enter your password"
                v-model="form.password"
              />
            </div>
            <div class="my-4">
              <button
                class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white p-2"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { form: { email: "", password: "" } };
  },
  methods: { submit() {} },
};
</script>

<style>
</style>