<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="email" v-model.trim="email">
            <input type="password" placeholder="contraseña" v-model.trim="password">
            <button type="submit" :disabled="userStore.loadingUser">Login</button>
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import {useUserStore} from '../stores/user'
    // import {useRouter} from 'vue-router'


    const userStore = useUserStore()
    // const router = useRouter()

    const email = ref('')
    const password =ref('')
     
    const handleSubmit = async () => {
        if(!email.value || password.value.length < 6){
            return alert('Datos incompletos')
        }
        await userStore.loginUser(email.value, password.value)
        // router.push('/')
    }
</script>

<style>
    form{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    form input{
        height: 25px;
    }
</style>