<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import { computed, onMounted, ref } from 'vue';
  import { useJobStore } from '@/store';

  const jobStore = useJobStore();
  onMounted(() => {
    jobStore.loadJobs();
  });

  const featuredJobs = computed(() => jobStore.jobs.slice(0, 6));

  const stats = ref([
    { label: 'Active Jobs', value: '1,000+' },
    { label: 'Companies', value: '500+' },
    { label: 'Job Seekers', value: '10,000+' },
  ]);
</script>

<template>
  <div>
    <section class="relative overflow-hidden py-20 sm:py-32">
      <div class="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-20"></div>
      <div class="relative container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-5xl sm:text-7xl font-bold text-white mb-6">
            Discover Your Next Career Move
          </h1>
          <p class="text-xl text-neutral mb-10">
            Connect with top employers and find opportunities that match your skills and aspirations.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <RouterLink 
              to="/jobs" 
              class="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg"
            >
              Find Jobs
            </RouterLink>
            <RouterLink 
              to="/admin/job" 
              class="bg-surface hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg"
            >
              Post a Job
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-surface">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-4xl font-bold text-primary mb-2">{{ stat.value }}</div>
            <div class="text-neutral">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-primary mb-10 text-center">Featured Jobs</h2>
        <div v-if="jobStore.loading" class="text-center text-neutral text-xl">Loading...</div>
        <div v-else-if="jobStore.error" class="text-center text-red-500 text-xl">{{ jobStore.error }}</div>
        <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="job in featuredJobs" :key="job.id" class="bg-surface rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div class="p-6">
              <h3 class="text-xl font-semibold text-primary mb-2">{{ job.title }}</h3>
              <p class="text-neutral mb-2">{{ job.company }}</p>
              <p class="text-sm text-neutral mb-4">{{ job.location }}</p>
              <RouterLink 
                :to="`/jobs/${job.id}`" 
                class="text-primary hover:text-primary-dark font-medium inline-flex items-center"
              >
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="text-center mt-12">
          <RouterLink 
            to="/jobs" 
            class="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg"
          >
            View All Jobs
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="py-20 bg-surface">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-primary mb-6">Ready to Take the Next Step?</h2>
        <p class="text-xl text-neutral mb-10 max-w-2xl mx-auto">
          Whether you're looking for your dream job or searching for top talent, CareerTrack has you covered.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <RouterLink 
            to="/jobs" 
            class="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg"
          >
            Start Your Job Search
          </RouterLink>
          <RouterLink 
            to="/admin/job" 
            class="bg-background hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg"
          >
            Post a Job Opening
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>