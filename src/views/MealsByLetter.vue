<template>
  <div>
    <PageTitle title="Meals by Letter" class="p-8" />
    <div class="flex gap-1 text-gray-700 sm:gap-3 justify-center items-center ">
      <router-link
        v-for="letter of letters"
        :to="{ name: 'byLetter', params: { letter } }"
        class="hover:text-orange-500 transition hover:scale-150"
        >{{ letter }}</router-link
      >
    </div>
    <Meals :meals />
  </div>
</template>
<script setup>
import store from "../store";
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";
import Meals from "../components/Meals.vue";
import PageTitle from "../components/PageTitle.vue";
const route = useRoute();
const letters = "ACDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);
onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>

<style scoped>
a.router-link-active {
  color: #f97316;
  /* font-weight: 600; */
  font-size: 20px;
  transform: scale(1.5, 1.5);
}
</style>
