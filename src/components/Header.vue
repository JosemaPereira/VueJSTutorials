<template>
  <nav
    class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2"
  >
    <router-link class="mx-2" v-for="item in list" :to="item.to" :key="item.to"
      ><a>{{ item.title }}</a></router-link
    >
  </nav>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { title: "Heroes", to: "/heroes" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
      ],
    };
  },
};
</script>

<style>
</style>