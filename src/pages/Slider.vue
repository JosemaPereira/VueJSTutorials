<template>
  <div class="flex flex-wrap w-full">
    <div v-for="(slide, index) in sliders" :key="index">
      <div
        v-if="currentSlide === index"
        class="absolute w-full"
        :class="slide"
        style="height: 350px"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      interval: "",
      sliders: [
        "bg-blue-600",
        "bg-red-600",
        "bg-green-600",
        "bg-pink-600",
        "bg-yellow-600",
      ],
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide =
        this.currentSlide === this.sliders.length - 1
          ? 0
          : this.currentSlide + 1;
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
</style>