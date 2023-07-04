<template>
    <div>
        <h1>Home</h1>
        <button @click="userStore.logoutUser">Log-out</button>
    </div>
</template>


<script setup>
import { useUserStore } from "../stores/user";

const userStore = useUserStore()

</script>