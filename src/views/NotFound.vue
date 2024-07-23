<script setup lang="ts">
  import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="bg-background min-h-screen flex items-center justify-center px-4">
      <div class="max-w-2xl w-full text-center">
        <div class="mb-8 relative">
          <h1 class="text-9xl font-bold text-primary opacity-30">404</h1>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            <p class="text-2xl font-semibold text-neutral mb-2">Oops! Page Not Found</p>
            <p class="text-xl text-neutral">Looks like this job opportunity has expired</p>
          </div>
        </div>
        <div class="text-neutral">
          <p>Lost? Here are some helpful links:</p>
          <ul class="mt-2 flex justify-center space-x-4">
            <li><RouterLink to="/about" class="text-primary hover:underline">About Us</RouterLink></li>
            <li><RouterLink to="/contact" class="text-primary hover:underline">Contact</RouterLink></li>
            <li><RouterLink to="/jobs" class="text-primary hover:underline">Job Listings</RouterLink></li>
          </ul>
        </div>
      </div>
    </div>
</template>
    
<style scoped>
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
  
  .float-animation {
    animation: float 4s ease-in-out infinite;
  }
</style>