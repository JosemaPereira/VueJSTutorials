<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl">Real Time Chat</h1>
      <div class="border rounded-lg">
        <div class="h-64 p-2 overflow-y-auto">
          <div
            v-for="chat in state.chats"
            :key="chat.message"
            class="w-full"
            :class="chat.userId === userId ? 'text-right' : 'text-left'"
          >
            {{ chat.message }}
          </div>
        </div>
        <div class="h-8 p-2">
          <input
            v-model="state.message"
            placeholder="Start typing ..."
            class="p-1 border rounded shadow-shadow"
            @keydown.enter="sendMessage"
            ref="chatInputRef"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, reactive, ref } from "vue";
import { chatRef } from "../utilities/firebase";
import { useStore } from 'vuex';

export default {
  setup() {
    const state = reactive({
      chats: [],
      message: "",
    });
    const chatInputRef = ref("");

    const store = useStore();
    const userId = computed(()=> store.state.authUser.uid);
    onMounted(async () => {
      chatRef.on("child_added", (snapshot) => {
        state.chats.push({ key: snapshot.key, ...snapshot.val() });
      });
      chatInputRef.value.focus();
    });

    const sendMessage = () => {
      const newChat = chatRef.push();
      newChat.set({ userId: userId.value, message: state.message });
      state.message = "";
    };

    return { state, sendMessage, userId, chatInputRef };
  },
};
</script>

<style>
</style>