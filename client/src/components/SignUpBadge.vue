<script setup lang="ts">

import {RouterLink} from 'vue-router';
import session, { signUp, logout } from '@/stores/session';
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const name = ref('');
const handle = ref('');
</script>

<template>
    <div class="button" v-if="session.user=null">
        <button class="button is-primary" @click="signUp(name, handle, email, password)">
            <router-link to="/signup" >Sign Up</router-link>
        </button>
    </div>
    <div v-else>
        Welcome {{ session.user.handle }}
        (<a @click="logout()">
            Log Out
        </a>)
    </div>
</template>