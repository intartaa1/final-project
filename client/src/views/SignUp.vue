<script setup lang="ts">
    import session, { api, login } from '@/stores/session';
    import { ref, watch } from 'vue';
    import { useRoute, useRouter } from "vue-router";

    import { addUser, getUser, updateUser, type User } from "@/stores/users";

    const email = ref('');
    const password = ref('');
    const name = ref('');

    const route = useRoute();
    const router = useRouter();

    const user = ref({} as User);
    const isNew = ref(route.params.id == 'new')

    /*if(!isNew.value){
        getUser(route.params.id as string).then(x => {
            if(x){
                user.value = x
            }else{
                isNew.value = true;
            }
        });
    }

    async function save(){
        try{
            if(isNew.value){
                const data = await addUser(user.value);
                session.messages.push({ type: "success", text: 'Successfully inserted ${data.title}'})
            }else{
                const data = await updateUser(user.value._name, user.value);
                session.messages.push({ type: "success", text: 'Successfully updated ${data.title}'})
            }
            await router.push({ name: 'admin_users' });
        } catch (error) {
            //setError(error as string); being set in the api function
        }
    }

    async function cancel() {
        await router.push({ name: 'admin_users' });
    }

    const isTenorSearchOpen = ref(false);
    const tenorSearch = ref('');
    const tenorResults = ref([] as any[]);
    watch(tenorSearch, async () => {
       if(tenorSearch.value.length > 2){
        const data = await fetch(`https://tenor.googleapis.com/v2/search?q=${tenorSearch.value}&key=${import.meta.env.VITE_TENOR_API_KEY}&limit=8`)
                            .then(x=> x.json())
        console.log({ data });
        tenorResults.value = data.results;
       }
    });*/

</script>

<template>
    <div>
        <form class="box" @submit.prevent="signUp(name, handle, email, password,)">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                <input class="input" type="text" placeholder="First & Last Name" v-model="name">
                </div>
            </div>

            <div class="field">
                <label class="label">User Handle</label>
                <div class="control">
                <input class="input" type="email" placeholder="e.g. Smith, John" v-model="handle">
                </div>
            </div>

            <div class="field">
                <label class="label">Email</label>
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

            <button @click="signUp(name, handle, email, password)">Sign Up</button>
        </form>
    </div>
</template>

<style scoped>

</style>