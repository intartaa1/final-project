<script setup lang="ts">
    import session, { login, logout } from '../stores/session'
</script>
<template>
    <div class="dropdown is-hoverable">
        <div class="dropdown-trigger">
            <button class="button" aria-hasgroup="true" aria-controls="dropdown-menu">
                <span>Login</span>
                <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <a href="#" class="dropdown-item">
                    Antonio Intartaglia
                </a>
                <a class="dropdown-item">
                    Moshe Plotkin
                </a>
                <a href="#" class="dropdown-item">
                    Lenore Perez
                </a>
                <hr class="dropdown-divider">
                <a href="#" class="dropdown-item">
                    Other User
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>