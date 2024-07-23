<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';
  import { useJobStore } from '@/store';
  import SearchBar from '@/components/SearchBar.vue';
  import JobCard from '@/components/JobCard.vue';

  const jobStore = useJobStore();
  const searchQuery = ref('');
  const searchLocation = ref('');

  onMounted(() => {
    jobStore.loadJobs();
  });

  const handleSearch = (searchData: { query: string, location: string }) => {
    searchQuery.value = searchData.query;
    searchLocation.value = searchData.location;
  };

  const filteredJobs = computed(() => {
    return jobStore.jobs.filter(job => {
      const matchesQuery = job.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchQuery.value.toLowerCase());
      const matchesLocation = !searchLocation.value || job.location.includes(searchLocation.value);
      return matchesQuery && matchesLocation;
    })
  });
</script>

<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-primary mb-8">Available Jobs</h1>
      
      <SearchBar @search="handleSearch" class="mb-8" />
      
      <div v-if="jobStore.loading" class="text-center text-xl">Loading...</div>
      <div v-else-if="jobStore.error" class="text-center text-xl text-error">{{ jobStore.error }}</div>
      <div v-else>
        <div v-if="filteredJobs.length === 0" class="text-center text-xl">
          No jobs found. Try adjusting your search.
        </div>
        <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <JobCard v-for="job in filteredJobs" :key="job.id" :job="job" />
        </div>
      </div>
    </div>
</template>
  
