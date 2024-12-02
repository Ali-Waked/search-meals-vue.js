<template>
  <Meals :meals />
</template>
<script setup>
import axios from "axios";
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import MealItem from "../components/MealItem.vue";
import store from "../store";
import { searchMealsByIngredient } from "../store/actions";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";
const meals = computed(() => store.state.mealsByIngredient);
const route = useRoute();
onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>
