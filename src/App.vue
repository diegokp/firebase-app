<template>
  <h1>App base</h1>
  <div v-if="!userStore.loadingSession">
    <nav>
    <router-link to="/" v-if="userStore.userData" class="nav-menu">Home</router-link>
    <router-link to="/login"  v-if="!userStore.userData" class="nav-menu">Login</router-link>
    <router-link to="/register"  v-if="!userStore.userData" class="nav-menu">Register</router-link>
    </nav>
    <button @click="userStore.logoutUser" v-if="userStore.userData">Log-out</button>
  </div>
  <div v-else>
    loading user....
  </div>
   <router-view></router-view>
</template>

<script setup>
  import { useUserStore } from './stores/user'
  const userStore = useUserStore()
</script>
