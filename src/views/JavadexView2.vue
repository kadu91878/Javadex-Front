<template>
  <div class="javadex">
    <h1>
      <label for="pk1-input">PK1:</label>
      <n-input
        :value="pk1"
        @input="pk1 = formatName($event)"
        v-model="pk1"
        @keydown.enter="runJavadex"
      />
      <label for="pk2-input">PK2:</label>
      <n-input
        :value="pk2"
        @input="pk2 = formatName($event)"
        v-model="pk2"
        @keydown.enter="runJavadex"
      />
      <n-button @click="runJavadex">Run Javadex</n-button>
      <div v-if="error" class="error">
        Pokemon invalido, por favor  reinicie a pagina, e tente novamente
      </div>
      <div v-else-if="javadexResult">
        Result: {{ formatName(pk1) }} recebe {{ javadexResult.split("/")[0] }} e
        {{ formatName(pk2) }} recebe
        {{ javadexResult.split("/")[1] }}
        <div>
          <span style="padding: 0 30px"></span>
          <img
            :src="pk1Img"
            alt="{{ formatName(pk1) }} image"
            @error="handleError"
          />
          <span style="padding: 0 30px"></span>
          <img
            :src="pk2Img"
            alt="{{ formatName(pk2) }} image"
            @error="handleError"
          />
        </div>
      </div>
    </h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { NButton, NInput } from "naive-ui";
export default defineComponent({
  components: { NButton, NInput },
  data() {
    return {
      pk1: "",
      pk2: "",
      javadexResult: null as string | null,
      pk1Img: "",
      pk2Img: "",
      error: false,
    };
  },
  methods: {
    async runJavadex() {
      this.error = false;
      if (!this.pk1 || !this.pk2) {
        // se alguma das variáveis pk1 ou pk2 não tiver um valor, não execute o método
        return (this.error = true);
      }

      try {
        const response = await fetch("http://localhost:8080/javadex", {
          method: "POST",
          body: JSON.stringify({ pokemon1: this.pk1, pokemon2: this.pk2 }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const pk1Img = `https://www.pokemonlife.net/img/pokemon/po_${this.pk1.toLowerCase()}.png`;
        const pk2Img = `https://www.pokemonlife.net/img/pokemon/po_${this.pk2.toLowerCase()}.png`;
        const result = await response.json();
        this.javadexResult = `${result[0]} / ${result[1]}`;
        this.pk1Img = pk1Img;
        this.pk2Img = pk2Img;
      } catch (error) {
        console.error(error);
      }
    },
    formatName(name: string): string {
      return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    },
    handleError() {
      this.error = true;
    },
  },
});
</script>

<style>
.javadex {
  margin: 0;
}
</style>
