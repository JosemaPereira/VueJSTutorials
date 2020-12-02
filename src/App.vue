<template>
  <Header />
  <div class="w-full flex">
    <Heroes />
  </div>
</template>

<script>
import Header from "./components/Header";
import Heroes from "./components/Heroes";

export default {
  components: { Header, Heroes },
};
</script>