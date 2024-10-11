<template>
  <div>
    <header
      class="bg-gray-800 p-4 text-white flex justify-between items-center"
    >
      <h1 class="text-2xl">Task Manager</h1>
      <nav>
        <ul class="flex space-x-4">
          <li><NuxtLink to="/" class="hover:underline">Inicio</NuxtLink></li>
          <li>
            <NuxtLink to="/create" class="hover:underline"
              >Crear Tarea</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </header>

    <main class="p-8">
      <Nuxt />
    </main>

    <footer class="bg-gray-800 p-4 text-white mt-8 text-center">
      <p>&copy; 2024 Task Manager App</p>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
header nav ul li a {
  color: white;
  text-decoration: none;
}

header nav ul li a:hover {
  text-decoration: underline;
}
</style>
