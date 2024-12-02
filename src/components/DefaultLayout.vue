<template>
    <Navbar />
    <main class="container mx-auto">
      <router-view />
    </main>
</template>

<script setup>
import Navbar from "./Navbar.vue";
</script>
