<script setup lang="ts">

</script>
<template>
    <div>
        <form class="box" @submit.prevent="signUp(name, handle, email, password,)">
            <div class="field">
                <label class="label">First Name</label>
                <div class="control">
                <input class="input" type="text" placeholder="First Name" v-model="name">
                </div>
            </div>

            <div class="field">
                <label class="label">Last Name</label>
                <div class="control">
                <input class="input" type="text" placeholder="Last Name" v-model="name">
                </div>
            </div>

            <div class="field">
                <label class="label">Handle</label>
                <div class="control">
                <input class="input" type="handle" placeholder="e.g. Smith, John" v-model="handle">
                </div>
            </div>

            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                <input class="input" type="email" placeholder="e.g. alex@example.com" v-model="email">
                </div>
            </div>

            <div class="field">
                <label class="label">Is Admin</label>
                <div class="control">
                <input class="input" type="input" placeholder="Yes or No" v-model="admin">
                </div>
            </div>

            <div class="buttons">
            <RouterLink class="button is-light" to="/admin">
                Save
            </RouterLink>
        </div>
        </form>
    </div>
</template>

<style scoped>

</style>