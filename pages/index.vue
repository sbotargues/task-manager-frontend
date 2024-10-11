<template>
  <div class="space-y-8 m-8">
    <TaskForm />
    <TaskList />
  </div>
</template>

<script setup lang="ts">
import TaskForm from "../components/TaskForm.vue";
import TaskList from "../components/TaskList.vue";
</script>
