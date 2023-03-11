<template>
  <div class="javadex">
    <h1>
      <label for="pk1-input">PK1:</label>
      <n-input :value="pk1" @input="pk1 = formatName($event)" />
      <label for="pk2-input">PK2:</label>
      <n-input :value="pk2" @input="pk2 = formatName($event)" />
      <n-button @click="runJavadex">Run Javadex</n-button>
      <div>
      <p v-if="javadexResult">
        Result: {{ formatName(pk1) }} recebe {{ javadexResult.split("/")[0] }} e {{ formatName(pk2) }}
        recebe {{ javadexResult.split("/")[1] }}
        <div>
        <img :src="pk1Img" alt="{{ formatName(pk1) }} image" />
        <span style="padding: 0 30px"></span>
        <!-- Espaçamento entre as imagens -->
        <img :src="pk2Img" alt="{{ formatName(pk2) }} image" />
        </div>
      </p>
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
},
});
</script>

<style>
.javadex {
  margin: 0;
}
</style>