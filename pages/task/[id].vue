<template>
  <div v-if="task" class="p-4 bg-white rounded-md shadow-md">
    <h2 class="text-2xl font-bold mb-2">{{ task.title }}</h2>
    <p class="text-gray-700 mb-4">{{ task.description }}</p>
    <TaskForm :task="task" />
  </div>
  <div v-else>
    <p>Cargando tarea...</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useTaskStore } from "@/store/taskStore";
import { useRoute } from "vue-router";

interface Task {
  id: string;
  title: string;
  description: string;
}

const task = ref<Task | null>(null);
const route = useRoute();
const taskStore = useTaskStore();

onMounted(async () => {
  const taskId = route.params.id as string;
  await taskStore.fetchTaskById(taskId);
  task.value = taskStore.task;
});
</script>
