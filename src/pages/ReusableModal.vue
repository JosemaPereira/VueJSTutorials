<template>
  <section class="flex flex-wrap w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-5 w-full text-center">Re-usableModal</h1>
      <Modal v-if="isRedModalOpen" @close="isRedModalOpen = false">
        <h1 class="text-red-500">Red Modal</h1>
      </Modal>
      <button class="border rounded px-2 mx-4" @click="isRedModalOpen = true">
        Open Red Modal
      </button>

      <Modal v-if="isBlueModalOpen" @close="isBlueModalOpen = false">
        <h1 class="text-blue-500">Blue Modal</h1>
      </Modal>
      <button class="border rounded px-2 mx-4" @click="isBlueModalOpen = true">
        Open Blue Modal
      </button>

      <Modal v-if="fallbackModal" @close="fallbackModal = false"> </Modal>
      <button class="border rounded px-2 mx-4" @click="fallbackModal = true">
        Open fallback Modal
      </button>

      <Modal v-if="templateModal" @close="templateModal = false">
        <template #title>Template Modal Title</template>
        <template #body>Template Modal Body</template>
      </Modal>
      <button class="border rounded px-2 mx-4" @click="templateModal = true">
        Open Template Modal
      </button>
    </div>
  </section>
</template>

<script>
import Modal from "../components/Modal";
import { ref } from "vue";
export default {
  components: { Modal },
  setup() {
    const isRedModalOpen = ref(false);
    const isBlueModalOpen = ref(false);
    const fallbackModal = ref(false);
    const templateModal = ref(false);
    return { isRedModalOpen, isBlueModalOpen, fallbackModal, templateModal };
  },
};
</script>

<style>
</style>