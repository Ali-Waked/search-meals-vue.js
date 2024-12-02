<template>
  <PageTitle title="Random Meals" class="mt-8 ml-8" />
  <Meals :meals />
  <img :src="image" />
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import axiosClient from "../axiosClient";
import Meals from "../components/Meals.vue";
import PageTitle from "../components/PageTitle.vue";

const meals = ref([]);
// const ingredients = ref([]);

// const meals = computed(() => {
//     store.state.meals
// })

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }

});
</script>
