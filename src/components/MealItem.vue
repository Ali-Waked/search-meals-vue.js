<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 transition-transform">
  
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        alt="strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>

    <h3 class="p-3 font-bold">{{ meal.strMeal }}</h3>
    <p class="text-gray-500 px-3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aperiam
      accusantium soluta a quo eos maiores aut ullam. Eos quibusdam nesciunt
      eligendi laboriosam, nobis consectetur quae dignissimos excepturi facilis
      est.
    </p>
    <div class="p-3 flex justify-between items-center">
      <Button
        :href="meal.strYoutube"
        class="text-red-600 border-red-600 hover:bg-red-600"
        >YouTube</Button
      >
      <router-link
        :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
        class="px-3 py-2 rounded border-2 font-semibold text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
        >View</router-link
      >
    </div>
  </div>
</template>
<script setup>
import Button from "./Button.vue";
const {meal} = defineProps({
  meal: {
    type: Object,
    required: true,
  },
});
console.log(meal)
</script>
