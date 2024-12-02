<template>
  <div class="p-8">
    <PageTitle title="Ingredients" />
    <input
      type="text"
      v-model="keyword"
      name=""
      id=""
      class="rounded border-2 border-gray-200 bg-white w-full mb-3 mt-6"
      placeholder="Search For Ingredients"
    />
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
      <router-link
        :to="{
          name: 'byIngredient',
          params: { ingredient: ingredient.strIngredient },
        }"
        v-for="ingredient of computedIngredients"
        :key="ingredient.id"
        class="bg-white rounded block p-3 shadow"
      >
        <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
        <!-- <p>{{ ingredient.strDescription }}</p> -->
      </router-link>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import PageTitle from "../components/PageTitle.vue";
const ingredients = ref([]);
const keyword = ref("");
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    //   i.strDescription?.toLowerCase().includes(keyword.value.toLowerCase()) ||
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});
onMounted(async () => {
  await axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
