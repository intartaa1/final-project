<script setup lang="ts">
    import { RouterView } from 'vue-router'
    import NavVue from './components/Nav.vue';
    import SearchAutocomplete from './components/SearchAutocomplete.vue';

    export default {
      name: 'App'
      ,components: {
        SearchAutocomplete
      }
    };
</script>

<template>
  <header>
    <NavVue />
  </header>

  <div id="app">
    <SearchAutocomplete
     :items="[
      'Bike Riding',
      'Deadlifting',
      'Fishing',
      'Jogging',
      'Rollerskating',
      'Skatebaording'
     ]"
     />
  </div>


  <div class="container">
    <RouterView />
  </div>

</template>

<style scoped>
</style>
