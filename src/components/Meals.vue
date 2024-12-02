<template>
  <div class="grid grid-clos-1 md:grid-cols-3 gap-5 p-8 pb-0">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal />
  </div>
  <div v-if="!meals" class="flex justify-center text-lg text-gray-600">
    There are no Meals
  </div>
</template>
<script setup>
import MealItem from "./MealItem.vue";

const { meals } = defineProps({
  meals: {
    type: Object,
    required: true,
  },
});
</script>