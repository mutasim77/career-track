<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useJobStore } from '@/store';
  import { type Job } from '@/types';
  
  const route = useRoute();
  const router = useRouter();
  const jobStore = useJobStore();
  
  const isEditing = computed(() => !!route.params.id);
  const jobId = computed(() => String(route.params.id));
  
  const jobForm = ref<Partial<Job>>({
    title: '',
    company: '',
    location: '',
    description: '',
    requirements: [],
    salary: '',
  });
  
  const requirementsText = ref('');
  
  onMounted(() => {
    if (isEditing.value) {
      const job = jobStore.getJobById(jobId.value);
      if (job) {
        jobForm.value = { ...job };
        requirementsText.value = job.requirements.join('\n');
      }
    }
  });
  
  const handleSubmit = async () => {
    const updatedJob = {
      ...jobForm.value,
      requirements: requirementsText.value.split('\n').filter(req => req.trim() !== ''),
      postedDate: new Date().toISOString(),
    };
  
    if (isEditing.value) {
      await jobStore.updateJobInStore(jobId.value, updatedJob as Job);
    } else {
      await jobStore.addJobs(updatedJob as Omit<Job, 'id'>);
    }
  
    router.push('/admin');
  }
</script>

<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-primary mb-8">{{ isEditing ? 'Edit Job' : 'Add New Job' }}</h1>
      <form @submit.prevent="handleSubmit" class="bg-surface rounded-lg shadow-md p-6">
        <div class="mb-4">
          <label for="title" class="block text-neutral mb-2">Job Title</label>
          <input v-model="jobForm.title"  id="title" type="text" required
                 class="w-full px-3 py-2 bg-background text-white rounded focus:outline-none focus:ring-2 focus:ring-primary">
        </div>
        <div class="mb-4">
          <label for="company" class="block text-neutral mb-2">Company</label>
          <input v-model="jobForm.company" id="company" type="text" required
                 class="w-full px-3 py-2 bg-background text-white rounded focus:outline-none focus:ring-2 focus:ring-primary">
        </div>
        <div class="mb-4">
          <label for="location" class="block text-neutral mb-2">Location</label>
          <input v-model="jobForm.location" id="location" type="text" required
                 class="w-full px-3 py-2 bg-background text-white rounded focus:outline-none focus:ring-2 focus:ring-primary">
        </div>
        <div class="mb-4">
          <label for="description" class="block text-neutral mb-2">Description</label>
          <textarea v-model="jobForm.description" id="description" rows="4" required
                    class="w-full px-3 py-2 bg-background text-white rounded focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
        </div>
        <div class="mb-4">
          <label for="requirements" class="block text-neutral mb-2">Requirements (one per line)</label>
          <textarea v-model="requirementsText" id="requirements" rows="4" required
                    class="w-full px-3 py-2 bg-background text-white rounded focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
        </div>
        <div class="mb-4">
          <label for="salary" class="block text-neutral mb-2">Salary</label>
          <input v-model="jobForm.salary" id="salary" type="text" required
                 class="w-full px-3 py-2 bg-background text-white rounded focus:outline-none focus:ring-2 focus:ring-primary">
        </div>
        <button type="submit" class="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded transition duration-300">
          {{ isEditing ? 'Update Job' : 'Add Job' }}
        </button>
      </form>
    </div>
</template>
