<script setup lang="ts">
    import { ref } from 'vue';

    const firstName = ref('');
    const lastName = ref('');
    const handle = ref('');
    const email = ref('');
    const admin = ref('');

    function isValidEmail(email: string) {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      return emailRegex.test(email);
    }

    async function saveUser(user: any) {
    try {
        const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
        });
        const result = await response.json();
        if (response.ok) {
        console.log(`User ${user.handle} saved successfully`);
        } else {
        console.error(result.message);
        }
    } catch (err) {
        console.error(err);
    }
    }


    function signUp(firstName: any, lastName: any, handle: any, email: any, admin: any) {
        if (!isValidEmail(email)) {
            return;
        }
        if (admin !== "Yes" && admin !== "No") {
            return;
        }
        const user = {
            firstName,
            lastName,
            handle,
            email,
            admin: admin === "Yes"
        };

        saveUser(user);
    }

</script>
<template>
    <div>
        <form class="box" @submit.prevent="signUp(firstName, lastName, handle, email, admin,)">
            <div class="field">
                <label class="label">First Name</label>
                <div class="control">
                <input class="input" type="text" placeholder="First Name" v-model="firstName">
                </div>
            </div>

            <div class="field">
                <label class="label">Last Name</label>
                <div class="control">
                <input class="input" type="text" placeholder="Last Name" v-model="lastName">
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