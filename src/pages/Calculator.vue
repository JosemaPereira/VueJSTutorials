<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl text-center">Calculator</h1>
      <p
        class="text-3xl text-right mt-10 mb-2 w-40 h-20 overflow-x-auto"
        style="direction: rtl"
      >
        {{ currentNum }}
      </p>
      <div class="h-10">
        <small class="h-5" v-if="selectedOp"
          >{{ prevNum }} {{ selectedOp }} {{ currentNum }}
        </small>
      </div>
      <div class="my-10 grid grid-cols-4 gap-1">
        <button
          v-for="key in keys"
          @click="pressed(key)"
          :key="key"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          {{ key }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import useWindowEvent from "../utilities/composition/useWindowEvent";

export default {
  setup() {
    const keys = ref([
      "1",
      "2",
      "3",
      "+",
      "4",
      "5",
      "6",
      "-",
      "7",
      "8",
      "9",
      "*",
      "c",
      "0",
      "=",
      "/",
    ]);
    const operations = ["+", "-", "*", "/"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const currentNum = ref("");
    const prevNum = ref("");
    const selectedOp = ref("");

    const pressed = (value) => {
      if (value === "=" || value === "Enter") calculate();
      else if (value === "c") clear();
      else if (operations.includes(value)) applyOperation(value);
      else if (numbers.includes(value)) appendNumber(value);
    };

    const appendNumber = (value) => (currentNum.value += value);

    const applyOperation = (value) => {
      calculate();
      prevNum.value = currentNum.value;
      currentNum.value = "";
      selectedOp.value = value;
    };

    const calculate = () => {
      if (selectedOp.value === "*") multiply();
      else if (selectedOp.value === "/") divide();
      else if (selectedOp.value === "-") subtract();
      else if (selectedOp.value === "+") sum();
      selectedOp.value = "";
      prevNum.value = "";
    };

    const multiply = () =>
      (currentNum.value = prevNum.value * currentNum.value);

    const divide = () => (currentNum.value = prevNum.value / currentNum.value);

    const subtract = () =>
      (currentNum.value = prevNum.value - currentNum.value);

    const sum = () => (currentNum.value = +prevNum.value + +currentNum.value);

    const clear = () => (currentNum.value = "");

    const handleKeydown = (e) => pressed(e.key);

    useWindowEvent("keydown", handleKeydown);

    return {
      currentNum,
      pressed,
      appendNumber,
      calculate,
      applyOperation,
      prevNum,
      selectedOp,
      keys,
    };
  },
};
</script>

<style>
</style>