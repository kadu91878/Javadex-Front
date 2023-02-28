<template>
  <div>
    <label for="pk1-input">PK1:</label>
    <input id="pk1-input" type="text" v-model="pk1" />
    <label for="pk2-input">PK2:</label>
    <input id="pk2-input" type="text" v-model="pk2" />
    <button @click="runJavadex">Run Pythondex</button>
    <p v-if="javadexResult">{{ javadexResult }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      pk1: "",
      pk2: "",
      javadexResult: null as string | null,
    };
  },
  methods: {
    async runJavadex() {
      try {
        const response = await fetch("http://localhost:8080/javadex", {
          method: "POST",
          body: JSON.stringify({ pokemon1: this.pk1, pokemon2: this.pk2 }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        this.javadexResult = `Result: ${result[0]} / ${result[1]}`;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>
