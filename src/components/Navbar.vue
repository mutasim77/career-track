<script setup lang="ts">
  import { RouterLink, useRoute } from 'vue-router';

  const isActiveLink = (routePath: string) => {
    const route = useRoute();
    return route.path === routePath;
  }

  const navLinks = {
    'Home' : '/',
    'Jobs' : '/jobs',
    'About' : '/about',
    'Contact' : '/contact',
  }
</script>

<template>
    <nav class="bg-surface text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <RouterLink to="/" class="flex-shrink-0 text-primary font-semibold text-xl">
              CareerTrack
            </RouterLink>
            <div class="hidden md:block">
              <div  class="ml-10 flex items-baseline space-x-4">
                <RouterLink
                  v-for="(link, name) in navLinks"
                  :key="name"
                  :to="link" 
                  :class="[
                    isActiveLink(link) ? 'bg-primary' : 'bg-transparent',
                    'px-3', 'py-2', 'rounded-md', 'text-sm', 'font-medium', 'hover:bg-primary'
                  ]"
                >
                {{ name }}
              </RouterLink>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <RouterLink to="/admin" class="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300">
                Admin Page
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
