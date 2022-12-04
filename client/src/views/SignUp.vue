<script setup lang="ts">
    import { login } from '@/stores/session';
    import { ref } from 'vue';

    const email = ref('');
    const password = ref('');
    const name = ref('');

</script>

<template>
    <div>
        <form class="box">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                <input class="input" type="text" placeholder="First & Last Name" v-model="name">
                </div>
            </div>

            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                <input class="input" type="email" placeholder="e.g. alex@example.com" v-model="email">
                </div>
            </div>

            <div class="field">
                <label class="label">Confirm Email</label>
                <div class="control">
                <input class="input" type="email" placeholder="e.g. alex@example.com" v-model="email">
                </div>
            </div>

            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                <input class="input" type="password" placeholder="Password" v-model="password">
                </div>
            </div>

            <div class="field">
                <label class="label">Confirm Password</label>
                <div class="control">
                <input class="input" type="password" placeholder="Password" v-model="password">
                </div>
            </div>

            <button class="button-is-primary">Sign In</button>
        </form>
    </div>
</template>

<style scoped>

</style>