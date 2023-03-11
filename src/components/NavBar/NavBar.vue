<template>
    <header class="header">
      <a href="https://www.pokemonlife.net" class="logo">Pokemon Life</a>
      <nav>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <style scoped>
  .header {
    background-color: #333;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    padding: 10px;
    margin: 0;
  }
  
  .logo {
    color: #f5c517;
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;

  }
  
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    margin-left: 20px;
  }
  
  a {
    color: white;
    text-decoration: none;
  }
  </style>
  