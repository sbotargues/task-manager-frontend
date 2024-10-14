export function createTaskService(config) {
  const API_URL = config.public.apiUrl;

  return {
    async fetchTasks() {
      const response = await fetch(`${API_URL}/tasks`);
      return await response.json();
    },

    async fetchTaskById(id: string) {
      const response = await fetch(`${API_URL}/tasks/${id}`);
      return await response.json();
    },

    async createTask(task: { title: string; description: string }) {
      const response = await fetch(`${API_URL}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      return await response.json();
    },

    async updateTask(task: { id: string; title: string; description: string }) {
      const response = await fetch(`${API_URL}/tasks/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      return await response.json();
    },

    async deleteTask(id: string) {
      await fetch(`${API_URL}/tasks/${id}`, {
        method: "DELETE",
      });
    },
  };
}
