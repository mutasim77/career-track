<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="flex flex-col min-h-screen bg-background text-white font-sans">
    <Navbar />
    <main class="flex-grow">
      <RouterView/>
    </main>
    <Footer />
  </div>
</template>