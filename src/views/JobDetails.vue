<script setup lang="ts">
  import { computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useJobStore } from '@/store';
  import { formatDate } from '@/utils/helpers';
  
  const route = useRoute();
  const jobStore = useJobStore();
  
  const jobId = computed(() => String(route.params.id));
  const job = computed(() => jobStore.getJobById(jobId.value));
  
  onMounted(() => {
    if (!jobStore.jobs.length) {
      jobStore.loadJobs();
    }
  });
</script>

<template>
    <div v-if="job" class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-primary mb-4">{{ job.title }}</h1>
      <div class="bg-surface rounded-lg shadow-md p-6">
        <div class="mb-4">
          <p class="text-xl text-neutral">{{ job.company }}</p>
          <p class="text-neutral">{{ job.location }}</p>
        </div>
        <div class="mb-6">
          <h2 class="text-2xl font-semibold text-primary mb-2">Job Description</h2>
          <p>{{ job.description }}</p>
        </div>
        <div class="mb-6">
          <h2 class="text-2xl font-semibold text-primary mb-2">Requirements</h2>
          <ul class="list-disc list-inside">
            <li v-for="(req, index) in job.requirements" :key="index">{{ req }}</li>
          </ul>
        </div>
        <div class="mb-6">
          <h2 class="text-2xl font-semibold text-primary mb-2">Salary</h2>
          <p>{{ job.salary }}</p>
        </div>
        <div class="flex justify-between items-center">
          <p class="text-neutral">Posted on: {{ formatDate(job.postedDate) }}</p>
          <RouterLink
            :to="`/apply/${job.id}`" 
            class="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded transition duration-300"
          >
            Apply Now
          </RouterLink>
        </div>
      </div>
    </div>
    <div v-else-if="jobStore.loading" class="container mx-auto px-4 py-8 text-center text-primary">
      <p class="text-xl">Loading job details...</p>
    </div>
    <div v-else class="container mx-auto px-4 py-8 text-center text-error">
      <p class="text-xl">No job found. Try again!</p>
    </div>
  </template>
  
