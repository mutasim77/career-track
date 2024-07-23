import { defineStore } from 'pinia'
import { type Job } from '@/types'
import { createJob, deleteJob, fetchJobs, updateJob } from '@/services/api'
import { computed, ref } from 'vue'

export const useJobStore = defineStore('job', () => {
    const jobs = ref<Job[]>([]);
    const loading = ref<boolean>(false);
    const error = ref<string | null>(null);

    const loadJobs = async () => {
        loading.value = true;
        try {
            jobs.value = await fetchJobs();
            error.value = null;
        } catch (e) {
            error.value = 'Failed to load jobs';
        } finally {
            loading.value = false;
        }
    }

    const addJobs = async (job: Omit<Job, 'id'>) => {
        loading.value = true;
        try {
            const newJob = await createJob(job);
            jobs.value.push(newJob);
            error.value = null;
        } catch (e) {
            error.value = 'Failed to add job';
        } finally {
            loading.value = false;
        }
    }

    const updateJobInStore = async (id: string, updatedJob: Partial<Job>) => {
        loading.value = true;
        try {
            const updated = await updateJob(id, updatedJob);
            const index = jobs.value.findIndex((job) => job.id === id);
            if (index !== -1) {
                jobs.value[index] = { ...jobs.value[index], ...updated };
            }
            error.value = null;
        } catch (e) {
            error.value = 'Failed to update job';
        } finally {
            loading.value = false;
        }
    }

    const removeJob = async (id: string) => {
        loading.value = true;
        try {
            await deleteJob(id);
            jobs.value = jobs.value.filter((job) => job.id !== id);
            error.value = null;
        } catch (e) {
            error.value = 'Failed to delete job';
        } finally {
            loading.value = false;
        }
    }

    const getJobById = computed(() => {
        return (id: string) => jobs.value.find((job) => job.id === id);
    });

    return {
        jobs,
        loading,
        error,
        loadJobs,
        getJobById,
        addJobs,
        updateJobInStore,
        removeJob,
    }
});