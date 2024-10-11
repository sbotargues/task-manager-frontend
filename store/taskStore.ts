// store/taskStore.ts
import { defineStore } from "pinia";

interface Task {
  id: number;
  title: string;
  description: string;
}

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [] as Task[],
    task: null as Task | null,
  }),
  actions: {
    async fetchTasks() {
      const config = useRuntimeConfig();
      const response = await fetch(`${config.public.apiUrl}/tasks`);
      this.tasks = await response.json();
    },
    async fetchTaskById(id: string) {
      const config = useRuntimeConfig();
      const response = await fetch(`${config.public.apiUrl}/tasks/${id}`);
      this.task = await response.json();
    },
    async createTask(task: Task) {
      const config = useRuntimeConfig();
      await fetch(`${config.public.apiUrl}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      this.fetchTasks();
    },
    async updateTask(task: Task) {
      const config = useRuntimeConfig();
      await fetch(`${config.public.apiUrl}/tasks/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      this.fetchTasks();
    },
    async deleteTask(id: number) {
      const config = useRuntimeConfig();
      await fetch(`${config.public.apiUrl}/tasks/${id}`, {
        method: "DELETE",
      });
      this.fetchTasks();
    },
  },
});
