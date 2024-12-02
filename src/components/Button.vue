<template>
  <a
    :href
    target="_blank"
    class="inline-block px-3 py-2 rounded border-2 font-semibold hover:text-white transition-colors"
    ><slot></slot
  ></a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>
