<script setup lang="ts">
  import { ref } from 'vue';
  import { useToast } from 'vue-toast-notification';
  import 'vue-toast-notification/dist/theme-sugar.css';

  const toast =  useToast(); 
  
  const form = ref({
    name: '',
    email: '',
    message: ''
  });
  
  const submitForm = () => {
    console.log('Form submitted:', form.value);
    form.value = { name: '', email: '', message: '' };
    toast.success('Thank you for your message. We will get back to you soon!', {
        position: 'top'
    });
  }
</script>

<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-primary mb-8">Contact Us</h1>
      <div class="bg-surface rounded-lg shadow-md p-6">
        <p class="text-neutral mb-6">
          I'd love to hear from you! Whether you have a question about our services, need assistance with your account, or want to provide feedback, please don't hesitate to reach out.
        </p>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label for="name" class="block text-neutral mb-2">Name</label>
            <input
              v-model="form.name"
              id="name"
              type="text"
              required
              class="w-full px-3 py-2 bg-background text-white rounded focus:outline-none focus:ring-2 focus:ring-primary"
            >
          </div>
          <div>
            <label for="email" class="block text-neutral mb-2">Email</label>
            <input
              v-model="form.email"
              id="email"
              type="email"
              required
              class="w-full px-3 py-2 bg-background text-white rounded focus:outline-none focus:ring-2 focus:ring-primary"
            >
          </div>
          <div>
            <label for="message" class="block text-neutral mb-2">Message</label>
            <textarea
              v-model="form.message"
              id="message"
              rows="4"
              required
              class="w-full px-3 py-2 bg-background text-white rounded focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>
          <button
            type="submit"
            class="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
</template>
