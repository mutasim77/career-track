import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/jobs',
        name: 'JobsList',
        component: () => import('@/views/JobsList.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/views/Contact.vue')
    },
    {
        path: '/jobs/:id',
        name: 'JobDetails',
        component: () => import('@/views/JobDetails.vue')
    },
    {
        path: '/apply/:id',
        name: 'ApplyJob',
        component: () => import('@/views/ApplyJob.vue')
    },
    {
        path: '/admin',
        name: 'AdminDashboard',
        component: () => import('@/views/AdminDashboard.vue')
    },
    {
        path: '/admin/job',
        name: 'AddEditJob',
        component: () => import('@/views/AddEditJob.vue')
    },
    {
        path: '/admin/job/:id',
        name: 'EditJob',
        component: () => import('@/views/AddEditJob.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: 'Not Found Page',
        component: () => import('@/views/NotFound.vue')
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;