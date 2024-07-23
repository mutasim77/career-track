import axios from 'axios'
import { type Job } from '../types';

const API_URL = 'http://localhost:3001';

export const fetchJobs = async (): Promise<Job[]> => {
    const response = await axios.get(`${API_URL}/jobs`)
    return response.data;
}

export const createJob = async (job: Omit<Job, 'id'>): Promise<Job> => {
    const response = await axios.post(`${API_URL}/jobs`, job)
    return response.data;
}

export const updateJob = async (id: string, job: Partial<Job>): Promise<Job> => {
    const response = await axios.put(`${API_URL}/jobs/${id}`, job)
    return response.data;
}

export const deleteJob = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/jobs/${id}`);
}