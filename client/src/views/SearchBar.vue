<script setup lang="ts">
    import { isLoading } from "@/stores/session";
    import { computed, reactive, ref, watch } from "vue";
    import { RouterLink } from "vue-router";
    import { getUsers, type User } from "../stores/users";

    const users = reactive([] as User[]);
    getUsers().then( x => users.push(...x.users));

    const search = ref("");
</script>

<template>
    <div>
        <div class="control">
            <input class="input" type="text" placeholder="Search" v-model="search" />
        </div>

        <div class="users">
            <RouterLink v-for="user in users" :key="user.name"
                        class="user" :class="{ 'is-disabled': isLoading }"
                        :to="'/user/${user.name}'"
                        v-show="user.title.toLowerCase().includes(search.toLowerCase())">
                    </RouterLink>
        </div>
    </div>
</template>