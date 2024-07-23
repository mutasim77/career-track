<template>
    <div class="bg-surface p-4 rounded-lg shadow-md">
      <form @submit.prevent="handleSearch" class="flex flex-wrap md:flex-nowrap gap-4">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search jobs..."
          class="flex-grow px-4 py-2 rounded bg-background text-white focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <select
          v-model="selectedLocation"
          class="px-4 py-2 rounded bg-background text-white focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">All Locations</option>
          <option v-for="location in locations" :key="location" :value="location">
            {{ location }}
          </option>
        </select>
        <button
          type="submit"
          class="w-full md:w-auto px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded transition duration-300"
        >
          Search
        </button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const searchQuery = ref('');
  const selectedLocation = ref('');
  const locations = ['Remote', 'New York', 'San Francisco', 'London'];
  
  const emit = defineEmits(['search']);
  
  const handleSearch = () => {
    emit('search', { query: searchQuery.value, location: selectedLocation.value });
  }
  </script>