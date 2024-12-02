<template>
  <div class="p-8">
    <PageTitle title="Search Meals by Name" class="mb-4" />
   
    <input
      type="text"
      v-model="keyword"
      name=""
      id=""
      class="rounded border-2 border-gray-200 bg-white w-full"
      placeholder="Search For Meals"
      @change="searchMeals"
    />
  </div>
  <Meals :meals />
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
// import axiosClient from "../axiosClient.js";
import store from "../store";
import MealItem from "../components/MealItem.vue";
import Meals from "../components/Meals.vue";
import PageTitle from "../components/PageTitle.vue";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);
const route = useRoute();

const searchMeals = () => {
  //   axiosClient.get(`search.php?s=${keyword.value}`).then((res) => res.json());
  if(keyword.value){
    store.dispatch("searchMeals", keyword.value);
  }else {
    store.commit('setSearchedMeals',[])
  }
};

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
