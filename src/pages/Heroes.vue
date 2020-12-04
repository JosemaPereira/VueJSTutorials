<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center">Heroes {{ herosCount }}</h1>
    <h2>{{ fullName }}</h2>
    <ul>
      <li class="flex justify-between" v-for="hero in heroes" :key="hero.uuid">
        <div>{{ hero.uuid }}:{{ hero.name }}</div>
        <button @click="remove(hero.uuid)">X</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input
        class="border rounded"
        v-model="newHero"
        placeholder="Add Hero"
        ref="heroRef"
      />
      <button
        type="submit"
        class="border rounded bg-gradient-to-r from-red-700 to bg-pink-500 text-white"
      >
        Add Hero
      </button>
      <button
        @click="setFullName"
        class="border rounded bg-gradient-to-r from-green-700 to bg-black text-white"
      >
        Set fullName
      </button>
    </form>
  </div>
</template>

<script>
import _ from "underscore";
export default {
  mounted() {
    this.$refs.heroRef.focus();
  },
  data() {
    return {
      newHero: "",
      fName: "Josema",
      lName: "Pereira",
      heroes: [
        { uuid: _.uniqueId(), name: "Batman" },
        { uuid: _.uniqueId(), name: "Superman" },
        { uuid: _.uniqueId(), name: "Wonder Woman" },
      ],
    };
  },
  methods: {
    addHero() {
      if (this.newHero !== "") {
        this.heroes.push({ uuid: _.uniqueId(), name: this.newHero });
        this.newHero = "";
      }
    },
    setFullName() {
      this.fullName = "Tamara Sabido";
    },
    remove(uuid) {
      this.heroes = this.heroes.filter((hero) => hero.uuid !== uuid);
    },
  },
  computed: {
    herosCount() {
      return this.heroes.length;
    },
    fullName: {
      get() {
        return `${this.fName} ${this.lName}`;
      },
      set(fullName) {
        const values = fullName.split(" ");
        this.fName = values[0];
        this.lName = values[1];
      },
    },
  },
};
</script>