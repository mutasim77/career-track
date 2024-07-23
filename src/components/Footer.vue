<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <footer class="bg-surface text-neutral py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-between">
          <div class="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 class="text-primary font-semibold mb-4">CareerTrack</h3>
            <p>Find your dream job or hire the perfect candidate.</p>
          </div>
          <div class="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 class="text-primary font-semibold mb-4">Quick Links</h4>
            <ul>
              <li><RouterLink to="/" class="hover:text-primary">Home</RouterLink></li>
              <li><RouterLink to="/jobs" class="hover:text-primary">Jobs</RouterLink></li>
              <li><RouterLink to="/about" class="hover:text-primary">About Us</RouterLink></li>
              <li><RouterLink to="/contact" class="hover:text-primary">Contact</RouterLink></li>
            </ul>
          </div>
          <div class="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 class="text-primary font-semibold mb-4">Contact Us</h4>
            <p>Email: qmutasim77@gmail.com</p>
            <p>Phone: +1 (111) 111-11111</p>
          </div>
          <div class="w-full md:w-1/4">
            <h4 class="text-primary font-semibold mb-4">Follow Us</h4>
            <div class="flex space-x-4">
              <a href="#" class="text-neutral hover:text-primary">Facebook</a>
              <a href="#" class="text-neutral hover:text-primary">Twitter</a>
              <a href="#" class="text-neutral hover:text-primary">LinkedIn</a>
            </div>
          </div>
        </div>
        <div class="mt-8 text-center">
          <p>&copy; 2024 CareerTrack ~ Mutasim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
