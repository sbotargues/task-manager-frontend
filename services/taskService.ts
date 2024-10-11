import { useRuntimeConfig } from "#imports";

const config = useRuntimeConfig();
const API_URL = config.public.apiUrl;

export async function fetchTasks() {
  const response = await fetch(`${API_URL}/tasks`);
  return await response.json();
}

export async function fetchTaskById(id: string) {
  const response = await fetch(`${API_URL}/tasks/${id}`);
  return await response.json();
}

export async function createTask(task: { title: string; description: string }) {
  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return await response.json();
}

export async function updateTask(task: {
  id: string;
  title: string;
  description: string;
}) {
  const response = await fetch(`${API_URL}/tasks/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return await response.json();
}

export async function deleteTask(id: string) {
  await fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE",
  });
}
