<template>
  <div>
    <h1>Heroes {{ herosCount }}</h1>
    <h2>{{ fullName }}</h2>
    <ul>
      <li v-for="hero in heroes" :key="hero.uuid">
        <p>
          {{ hero.uuid }}:{{ hero.name }}
          <button @click="remove(hero.uuid)">X</button>
        </p>
      </li>
    </ul>
    <form @submit.prevent="addHero">
      <input v-model="newHero" placeholder="Add Hero" />
      <button type="submit">Add Hero</button>
      <button @click="setFullName">Set fullName</button>
    </form>
  </div>
</template>

<script>
import _ from "underscore";
export default {
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