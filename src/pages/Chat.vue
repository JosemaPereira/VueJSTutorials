<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl">Real Time Chat</h1>
      <div class="border rounded-lg">
        <div class="h-64 p-2">
          <div
            v-for="chat in state.chats"
            :key="chat.message"
            class="w-full"
            :class="chat.userId === state.userId ? 'text-right' : 'text-left'"
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
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive } from "vue";
import firebase, { chatRef } from "../utilities/firebase";

export default {
  setup() {
    const state = reactive({
      chats: [],
      message: "",
      userId: "",
    });
    onMounted(async () => {
      chatRef.on("child_added", (snapshot) => {
        state.userId = firebase.auth().currentUser.uid;
        state.chats.push({ key: snapshot.key, ...snapshot.val() });
      });
    });

    const sendMessage = () => {
      const newChat = chatRef.push();
      newChat.set({ userId: state.userId, message: state.message });
      state.message = "";
    };

    return { state, sendMessage };
  },
};
</script>

<style>
</style>