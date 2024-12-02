<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      :class="
        route.name == 'home'
          ? 'inline-flex items-center h-full px-5 text-orange-500 font-bold sm:text-lg'
          : 'inline-flex items-center h-full px-5 sm:text-lg'
      "
      >Home</router-link
    >
    <div class="flex items-center gap-1 links">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full text-sm sm:text-base trnasition hover:bg-purple-200"
        >Search Meals</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full text-sm sm:text-base trnasition hover:bg-purple-200"
        >Meals By Letter</router-link
      >
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center px-2 h-full text-sm sm:text-base trnasition hover:bg-purple-200"
        >Meals By Ingredient</router-link
      >
    </div>
  </header>
</template>
<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
onMounted(() => {
  console.log(route.name == "home", route);
});
</script>

<style scoped>
div.links a.router-link-active {
  color: white;
  background-color: #f97316;
}
</style>
