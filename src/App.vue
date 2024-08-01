<script setup lang="ts">
import './assets/main.css'
</script>

<template>
  <header class="npm h-12">
    <nav class="flex gap-2">
      <router-link to="/operators" class="p-2 bg-gray-800">Operators</router-link>
      <router-link to="/regular-operations" class="p-2 bg-gray-800">Regular Operations</router-link>
      <router-link to="/integrated-strategies" class="p-2 bg-gray-800">Integrated Strategies</router-link>
      <router-link to="/stationary-security-service" class="p-2 bg-gray-800">Stationary Security Service</router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>
