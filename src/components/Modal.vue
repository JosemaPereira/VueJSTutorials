<template>
  <section
    @click="close"
    class="z-20 h-screen w-screen bg-gray-500 fixed top-0 left-0 opacity-50"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 rounded shadow x-1/3">
        <div class="p-2 border">
          <slot>Default Content</slot>
          <h1 class="text-2xl"><slot name="title"></slot></h1>
          <h2 class="text-xl"><slot name="body"></slot></h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(_, { emit }) {
    const close = () => {
      emit("close");
    };

    return { close };
  },
};
</script>

<style>
</style>