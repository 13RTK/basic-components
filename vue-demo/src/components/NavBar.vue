<template>
  <nav class="text-center text-2xl grid grid-cols-8">
    <RouterLink
      :to="`/${route.path === '/' ? 'floating-bubble' : ''}`"
      class="hover:underline cols-span-1"
      >{{ route.path === '/' ? 'floating-bubble' : 'home' }}</RouterLink
    >
  </nav>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();
</script>
