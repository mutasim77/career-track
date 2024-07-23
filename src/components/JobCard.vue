<script setup lang="ts">
import { type Job } from '@/types';
import { truncateText } from '@/utils/helpers';

defineProps<{
    job: Job 
}>();

</script>

<template>
    <div class="bg-surface rounded-lg shadow-md p-6">
      <h3 class="text-xl font-semibold text-primary mb-2">{{ job.title }}</h3>
      <p class="text-neutral mb-2">{{ job.company }}</p>
      <p class="text-sm text-neutral mb-4">{{ job.location }}</p>
      <p class="mb-4">{{ truncateText(job.description, 100) }}</p>
      <div class="flex justify-between items-center">
        <span class="text-primary font-semibold">{{ job.salary }}</span>
        <router-link 
          :to="`/jobs/${job.id}`" 
          class="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded transition duration-300"
        >
          View Details
        </router-link>
      </div>
    </div>
</template>
  
