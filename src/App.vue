<template>
  <Header />
  <div class="w-full flex">
    <!-- <Heroes /> -->
    <Calendar />
  </div>
</template>

<script>
import Header from "./components/Header";
// import Heroes from "./components/Heroes";
import Calendar from "./components/Calendar";

export default {
  components: { Header, Calendar },
};
</script>