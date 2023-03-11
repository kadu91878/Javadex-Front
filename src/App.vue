<script setup lang="ts">
import NavBar from "./components/NavBar/NavBar.vue";
</script>

<template>
  <div>
    <header>
      <NavBar />
    </header>
  
    <main style="margin-top: 80px;">
      <RouterView />
    </main>
  </div>
</template>

<style>
  body {
    margin: 0;
  }
  
  header {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #333;
    color: white;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 10px;
  }

  main {
    margin-top: 80px;
    padding: 10px;
  }
</style>
