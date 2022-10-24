<script setup lang="ts">
    import session, { login, logout } from '../stores/session'
</script>
<template>
    <div class="field has-addons">
        <div class="control is-expanded">
            <div class="select is-fullwidth">
                <select name="user">
                    <option value="user0">Select User</option>
                    <option value="user1">Antonio Intartaglia</option>
                    <option value="user2">Moshe Plotkin</option>
                    <option value="user3">Lenore Perez</option>
                    <Option value="user4">Guest</Option>
                </select>
            </div>
        </div>
        <div class="control">
            <button type="submit" class="button is-primary is-active">Login</button>
        </div>
    </div>
</template>

<style scoped>
</style>