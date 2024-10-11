<template>
  <form @submit.prevent="submitForm" class="space-y-4">
    <div class="flex flex-col">
      <label for="title" class="mb-2 font-semibold">Título</label>
      <input
        v-model="taskData.title"
        id="title"
        required
        class="border p-2 rounded-md"
        placeholder="Escribe el título"
      />
    </div>
    <div class="flex flex-col">
      <label for="description" class="mb-2 font-semibold">Descripción</label>
      <textarea
        v-model="taskData.description"
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
import { defineComponent, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useTaskStore } from "@/store/taskStore";

interface Task {
  id?: string;
  title: string;
  description: string;
}

export default defineComponent({
  props: {
    task: {
      type: Object as () => Task,
      default: () => ({ title: "", description: "" }),
    },
  },
  setup(props) {
    const router = useRouter();
    const taskData = ref<Task>({ ...props.task });
    const taskStore = useTaskStore();

    watch(
      () => props.task,
      (newTask) => {
        taskData.value = { ...newTask };
      }
    );

    const submitForm = async () => {
      const currentTask = {
        ...taskData.value,
        id: taskData.value.id ?? "",
      };

      if (taskData.value.id) {
        await taskStore.updateTask(currentTask);
      } else {
        await taskStore.createTask(currentTask);
      }

      router.push("/");
    };

    return {
      taskData,
      submitForm,
    };
  },
});
</script>
