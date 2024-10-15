import { defineStore } from "pinia";
import { createTaskService } from "../services/taskService";
import { useRuntimeConfig } from "nuxt/app";

interface Task {
  id: string;
  title: string;
  description: string;
}

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [] as Task[],
    task: null as Task | null,
    taskService: null as ReturnType<typeof createTaskService> | null,
  }),
  actions: {
    init() {
      // Inicializa config y el servicio una sola vez
      const config = useRuntimeConfig();
      this.taskService = createTaskService(config);
    },

    async fetchTasks() {
      if (!this.taskService) this.init();
      this.tasks = await this.taskService!.fetchTasks();
    },

    async fetchTaskById(id: string) {
      if (!this.taskService) this.init();
      this.task = await this.taskService!.fetchTaskById(id);
    },

    async createTask(task: Task) {
      if (!this.taskService) this.init();
      await this.taskService!.createTask(task);
      this.fetchTasks();
    },

    async updateTask(task: Task) {
      if (!this.taskService) this.init();
      await this.taskService!.updateTask(task);
      this.fetchTasks();
    },

    async deleteTask(id: string) {
      if (!this.taskService) this.init();
      await this.taskService!.deleteTask(id);
      this.fetchTasks();
    },
  },
});
