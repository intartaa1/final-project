<script setup lang="ts">
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';

    const isActive = ref(false);
</script>

<template>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">

        <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
          </a>
      
          <a :class="{ 'is-active': isActive }" @click="isActive = !isActive" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu"  :class="{ 'is-active': isActive }">
          <div class="navbar-start">
            <router-link to="/" class="navbar-item">
              Home
            </router-link>

            <router-link class="navbar-item" to="/thatactivity">
              Activity
            </router-link>

            <router-link class="navbar-item" to="/otheractivty">
              Other Activty
            </router-link>

            <router-link class="navbar-item" to="/addworkout">
              Add Workout
            </router-link>
            
            <router-link class="navbar-item" to="/generalstatistics">
              General Statistics
            </router-link>
        
            <router-link class="navbar-item" to="/admin">
              Admin
            </router-link>
            
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>
            
              <div class="navbar-dropdown">
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <button class="button is-primary" @click="isCartOpen = !isCartOpen">
                <router-link to="/signup">Sign Up</router-link>
              </button>
              </div>
              <div class="navbar-item">
              <login-badge></login-badge>
            </div>
          </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <button class="button is-primary" @click="isCartOpen = !isCartOpen">
                <router-link to="/login">Login</router-link>
              </button>
              </div>
              <div class="navbar-item">
              <login-badge></login-badge>
            </div>
          </div>
      </nav>

      <div class="control">
            <input class="input" type="text" placeholder="Search" v-model="search" />
        </div>
</template>

<style>
    .router-link-active {
        
        border-bottom: #fe3314 5px solid;
    }
</style>