<script setup lang="ts">
    import session, { login, logout } from '@/stores/session';
</script>
<template>
    <div class="dropdown is-hoverable">
        <div class="dropdown-trigger">
            <button class="button" aria-hasgroup="true" aria-controls="dropdown-menu">
                <router-link to="/login">Login</router-link>

            </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <a class="dropdown-item" @click="login('Antonio', 'Intartaglia')">
                    Antonio Intartaglia
                </a>
                <a class="dropdown-item" @click="login('Moshe', 'Plotkin')">
                    Moshe Plotkin
                </a>
                <a class="dropdown-item" @click="login('Lenore', 'Perez')">
                    Lenore Perez
                </a>
                </div>
            </div>
        </div>
</template>