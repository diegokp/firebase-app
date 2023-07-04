<template>
  <h1>App base</h1>
  <nav>
    <router-link to="/" class="nav-menu">Home</router-link>
    <router-link to="/login" class="nav-menu">Login</router-link>
    <router-link to="/register" class="nav-menu">Register</router-link>
  </nav>
   <router-view></router-view>
</template>
