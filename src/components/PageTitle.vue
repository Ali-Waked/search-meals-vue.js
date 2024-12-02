<template>
  <h1 class="text-3xl sm:text-4xl font-bold text-orange-500">{{ title }}</h1>
</template>
<script setup>
const {title} = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
