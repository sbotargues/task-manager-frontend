import { defineStore } from "pinia";
import {
  fetchTasks,
  fetchTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

interface Task {
  id: string;
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
      this.tasks = await fetchTasks();
    },
    async fetchTaskById(id: string) {
      this.task = await fetchTaskById(id);
    },
    async createTask(task: Task) {
      await createTask(task);
      this.fetchTasks();
    },
    async updateTask(task: Task) {
      await updateTask(task);
      this.fetchTasks();
    },
    async deleteTask(id: string) {
      await deleteTask(id);
      this.fetchTasks();
    },
  },
});
