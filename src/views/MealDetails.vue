<template>
  <div class="max-w-[800px] mx-auto pb-8">
    <PageTitle :title="meal.strMeal" class="mt-6 mb-8 text-center" />
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="max-w-full w-fit mx-auto my-4"
    />
    <div class="grid grid-clos-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong>
        <span class="text-gray-600 ml-1">{{ meal.strCategory }}</span>
      </div>
      <div>
        <strong class="font-bold">Area:</strong>
        <span class="text-gray-600 ml-1">{{ meal.strArea }}</span>
      </div>
      <div>
        <strong class="font-bold">Tags:</strong>
        <span class="text-gray-600 ml-1">{{ meal.strTags }}</span>
      </div>
    </div>
    <div class="my-2 text-gray-600 text-lg">
      {{ meal.strInstructions }}
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul>
          <template v-for="(i, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]" class="text-gray-600">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-3">Measures</h2>
        <ul>
          <template v-for="(i, ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind + 1}`]" class="text-gray-600">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="mt-6 flex justify-between">
      <Button
        :href="meal.strYoutube"
        class="text-red-600 border-red-600 hover:bg-red-600"
        >YouTube</Button
      >
      <Button
        :href="meal.strSource"
        class="text-indigo-600 border-indigo-600 hover:text-indigo-600 cursor-pointer border-transparent"
        >View Original Source</Button
      >
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import Button from "../components/Button.vue";
import PageTitle from "../components/PageTitle.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    // debugger;
    meal.value = data.meals[0] || {};
    console.log(meal.value);
  });
});
</script>
