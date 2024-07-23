<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useJobStore } from '@/store';
  import {useToast} from 'vue-toast-notification';
  import 'vue-toast-notification/dist/theme-sugar.css';


  const route = useRoute();
  const router = useRouter();
  const jobStore = useJobStore();
  const toast = useToast();

  const jobId = computed(() => String(route.params.id));
  const job = computed(() => jobStore.getJobById(jobId.value));

  const application = ref({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    coverLetter: '',
  });

  const handleFileUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      application.value.resume = target.files[0];
    }
  }

  const handleSubmit = async () => {
    console.log('data: ', application.value);
    
    toast.success('Your application has been successfully submitted!', {
      position: 'top'
    });
    router.push('/jobs');
  }
</script>

<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-primary mb-8">Apply for {{ job?.title }}</h1>
      <form @submit.prevent="handleSubmit" class="bg-surface rounded-lg shadow-md p-6">
        <div class="mb-4">
          <label for="name" class="block text-neutral mb-2">Full Name</label>
          <input v-model="application.name" id="name" type="text" required
                 class="w-full px-3 py-2 bg-background text-white rounded focus:outline-none focus:ring-2 focus:ring-primary">
        </div>
        <div class="mb-4">
          <label for="email" class="block text-neutral mb-2">Email</label>
          <input v-model="application.email" id="email" type="email" required
                 class="w-full px-3 py-2 bg-background text-white rounded focus:outline-none focus:ring-2 focus:ring-primary">
        </div>
        <div class="mb-4">
          <label for="phone" class="block text-neutral mb-2">Phone</label>
          <input v-model="application.phone" id="phone" type="tel"
                 class="w-full px-3 py-2 bg-background text-white rounded focus:outline-none focus:ring-2 focus:ring-primary">
        </div>
        <div class="mb-4">
          <label for="resume" class="block text-neutral mb-2">Resume (PDF)</label>
          <input @change="handleFileUpload" id="resume" type="file" accept=".pdf" required
                 class="w-full px-3 py-2 bg-background text-white rounded focus:outline-none focus:ring-2 focus:ring-primary">
        </div>
        <div class="mb-4">
          <label for="coverLetter" class="block text-neutral mb-2">Cover Letter</label>
          <textarea v-model="application.coverLetter" id="coverLetter" rows="4" required
                    class="w-full px-3 py-2 bg-background text-white rounded focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
        </div>
        <button type="submit" class="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded transition duration-300">
          Submit Application
        </button>
      </form>
    </div>
</template>
