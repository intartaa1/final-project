<script setup lang="ts">
    import session, { login, logout } from '../stores/session'
</script>

<template>
    <div class="buttons" v-if="session.user == null">
        <a class="button is-primary">
            <strong>Sign up</strong>
        </a>
        <div class="userRow">
            <label for="user">Users</label>
            <select name="userType" id="user">
                <option value="user1">Antonio Intartaglia</option>
                <option value="user2">Moshe Plotkin</option>
                <option value="user3">Lenore Perez</option>
            </select>
        </div>
        <a class="button is-light" @click="login('Antonio', 'Intartaglia')">
            Log in
        </a>
    </div>
    <div v-else>
        Welcome {{session.user.firstName}} {{session.user.lastName}}
        (<a @click="logout()">
            Log out
        </a>)
    </div>

</template>


<style scoped>
</style>