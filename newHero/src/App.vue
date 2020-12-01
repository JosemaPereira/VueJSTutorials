<template>
  <div>
    <h1>Heroes</h1>
    <ul>
      <li v-for="hero in heroes" :key="hero.uuid">
        {{ hero.uuid }}:{{ hero.name }}
      </li>
    </ul>
    <form @submit.prevent="addHero">
      <input v-model="newHero" placeholder="Add Hero" />
      <button type="submit">Add Hero</button>
    </form>
  </div>
</template>

<script>
import _ from "underscore";
export default {
  data() {
    return {
      newHero: "",
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
  },
};
</script>