<template>
  <form
    v-if="taskData && taskData.title !== undefined"
    @submit.prevent="submitForm"
    class="space-y-4"
  >
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
  <div v-else>
    <p>Cargando los datos de la tarea...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from "vue";
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
    const taskData = ref<Task | null>(null);
    const taskStore = useTaskStore();

    onMounted(() => {
      taskData.value = { ...props.task };
    });

    watch(
      () => props.task,
      (newTask) => {
        taskData.value = { ...newTask };
      },
      { immediate: true }
    );

    const submitForm = async () => {
      if (!taskData.value) return;

      const currentTask = {
        ...taskData.value,
        id: taskData.value.id ?? "",
      };

      try {
        if (currentTask.id) {
          await taskStore.updateTask(currentTask);
        } else {
          await taskStore.createTask(currentTask);
        }

        router.push("/");
      } catch (error) {
        console.error("Error al guardar la tarea", error);
      }
    };

    return {
      taskData,
      submitForm,
    };
  },
});
</script>
