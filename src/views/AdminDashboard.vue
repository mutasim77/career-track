<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useJobStore } from '@/store';
  import ConfirmationModal from '@/components/ConfirmationModal.vue';
  import { formatDate } from '@/utils/helpers';
  import { RouterLink } from 'vue-router';
  
  const jobStore = useJobStore();
  
  const showDeleteModal = ref(false);
  const jobToDeleteId = ref<string>('');
  
  onMounted(() => {
    jobStore.loadJobs();
  });
  
  const confirmDelete = (jobId: string) => {
    jobToDeleteId.value = jobId;
    showDeleteModal.value = true;
  }
  
  const deleteJob = async () => {
    if (jobToDeleteId.value) {
      await jobStore.removeJob(jobToDeleteId.value);
      showDeleteModal.value = false;
      jobToDeleteId.value = '';
    }
  }
</script>

<template>
    <div class="container mx-auto px-4 py-8">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-primary">Admin Dashboard</h1>
        <RouterLink
          to="/admin/job" 
          class="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded transition duration-300"
        >
          Add New Job
        </RouterLink>
      </div>
  
      <div v-if="jobStore.loading" class="text-center text-xl text-neutral">Loading...</div>
      <div v-else-if="jobStore.error" class="text-center text-xl text-red-500">{{ jobStore.error }}</div>
      <div v-else-if="jobStore.jobs.length === 0" class="text-center text-xl text-neutral">
        No jobs available. Add your first job listing!
      </div>
      <div v-else class="overflow-x-auto">
        <table class="w-full bg-surface rounded-lg shadow-md">
          <thead class="bg-background text-neutral">
            <tr>
              <th class="p-3 text-left">Title</th>
              <th class="p-3 text-left">Company</th>
              <th class="p-3 text-left">Location</th>
              <th class="p-3 text-left">Posted Date</th>
              <th class="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-700">
            <tr 
                v-for="(job, index) in jobStore.jobs" 
                :key="job.id" 
                :class="[
                'transition-colors duration-200',
                index % 2 === 0 ? 'bg-surface' : 'bg-surface-light',
                'hover:bg-primary hover:bg-opacity-10'
                ]"
            >
                <td class="p-4">{{ job.title }}</td>
                <td class="p-4">{{ job.company }}</td>
                <td class="p-4">{{ job.location }}</td>
                <td class="p-4">{{ formatDate(job.postedDate) }}</td>
                <td class="p-4">
                <RouterLink
                    :to="`/admin/job/${job.id}`" 
                    class="text-primary hover:text-primary-dark mr-3 transition duration-300"
                >
                    Edit
                </RouterLink>
                <button 
                    @click="confirmDelete(job.id)" 
                    class="text-red-500 hover:text-red-700 transition duration-300"
                >
                    Delete
                </button>
                </td>
            </tr>
        </tbody>
        </table>
      </div>
  
      <ConfirmationModal 
        :show="showDeleteModal"
        @cancel="showDeleteModal = false"
        @confirm="deleteJob"
      />
    </div>
</template>