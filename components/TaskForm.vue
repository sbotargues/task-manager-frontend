<template>
  <form @submit.prevent="submitForm" class="space-y-4">
    <div class="flex flex-col">
      <label for="title" class="mb-2 font-semibold">Título</label>
      <input
        v-model="task.title"
        id="title"
        required
        class="border p-2 rounded-md"
        placeholder="Escribe el título"
      />
    </div>
    <div class="flex flex-col">
      <label for="description" class="mb-2 font-semibold">Descripción</label>
      <textarea
        v-model="task.description"
        id="description"
        required
        class="border p-2 rounded-md"
        placeholder="Escribe la descripción"
      ></textarea>
    </div>
    <button
      type="submit"
      class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
    >
      Guardar
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useTaskStore } from "@/store/taskStore";

interface Task {
  id?: number;
  title: string;
  description: string;
}

export default defineComponent({
  setup() {
    const task = ref<Task>({ title: "", description: "" });
    const taskStore = useTaskStore();

    const submitForm = () => {
      const currentTask = {
        ...task.value,
        id: task.value.id ?? 0,
      };

      if (task.value.id) {
        taskStore.updateTask(currentTask);
      } else {
        taskStore.createTask(currentTask);
      }
    };

    return {
      task,
      submitForm,
    };
  },
});
</script>
