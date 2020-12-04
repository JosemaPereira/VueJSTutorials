<template>
  <div class="flex flex-wrap w-full relative">
    <div class="absolute w-full" v-for="(slide, index) in sliders" :key="index">
      <transition name="fade">
        <div
          v-if="isCurrentSlide(index)"
          class="slide-format"
          :class="slide"
        ></div>
      </transition>
    </div>
    <div class="absolute w-full slide-format">
      <div class="absolute bottom-0 w-full flex justify-center">
        <div
          v-for="(item, index) in sliders"
          :key="item"
          class="w-4 h-4 m-2 rounded-full cursor-pointer"
          :class="dotClass(index)"
          @click="makeActive(index)"
        ></div>
      </div>
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
  methods: {
    startCarousel(timeout = 500) {
      this.interval = setInterval(() => {
        this.currentSlide =
          this.currentSlide === this.sliders.length - 1
            ? 0
            : this.currentSlide + 1;
      }, timeout);
    },
    isCurrentSlide(index) {
      return this.currentSlide === index;
    },
    dotClass(index) {
      return this.isCurrentSlide(index) ? "bg-gray-700" : "bg-gray-300";
    },
    makeActive(index) {
      clearInterval(this.interval);
      this.currentSlide = index;
      this.startCarousel(5000);
    },
  },
  mounted() {
    this.startCarousel(5000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
.slide-format {
  height: 350px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>