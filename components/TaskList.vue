<template>
  <ul class="space-y-4">
    <li
      v-for="task in tasks"
      :key="task.id"
      class="border p-4 rounded-md bg-white shadow-md"
    >
      <div
        @click="viewTask(task.id)"
        class="cursor-pointer text-lg font-semibold"
      >
        {{ task.title }} - {{ task.description }}
      </div>
      <div class="mt-2 space-x-2">
        <button
          @click="editTask(task)"
          class="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600"
        >
          Editar
        </button>
        <button
          @click="deleteTask(task.id)"
          class="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
        >
          Eliminar
        </button>
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useTaskStore } from "@/store/taskStore";
import { storeToRefs } from "pinia";

const taskStore = useTaskStore();
const { tasks } = storeToRefs(taskStore);
const router = useRouter();

onMounted(() => {
  taskStore.fetchTasks();
});

const viewTask = (id: string) => {
  router.push(`/task/${id}`);
};

const editTask = (task: { id: string }) => {
  router.push(`/task/${task.id}`);
};

const deleteTask = (id: string) => {
  taskStore.deleteTask(id);
};
</script>

<script lang="ts">
export default {};
</script>
