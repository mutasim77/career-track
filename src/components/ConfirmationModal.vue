<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';

  defineProps<{
    show: boolean
  }>();

  const emit = defineEmits<{
      (e: 'cancel'): void
      (e: 'confirm'): void
  }>();

  const modalRef = ref<HTMLElement | null>(null);

  const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.value && !modalRef.value.contains(event.target as Node)) {
          emit('cancel');
      }
  }

  onMounted(() => {
      document.addEventListener('mousedown', handleOutsideClick);
  })

  onUnmounted(() => {
      document.removeEventListener('mousedown', handleOutsideClick);
  })
</script>

<template>
    <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div ref="modalRef" class="bg-surface p-6 rounded-lg shadow-lg max-w-md w-full">
        <h3 class="text-xl font-semibold mb-4 text-primary">Confirm Deletion</h3>
        <p class="mb-6 text-neutral">Are you sure you want to delete this job listing? This action cannot be undone.</p>
        <div class="flex justify-end space-x-4">
          <button 
            @click="$emit('cancel')" 
            class="px-4 py-2 bg-neutral hover:bg-gray-700 text-white rounded transition duration-300"
          >
            Cancel
          </button>
          <button 
            @click="$emit('confirm')" 
            class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
</template>