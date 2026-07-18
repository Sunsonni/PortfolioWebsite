<script setup>
import { ref, onMounted } from 'vue'
import Card from './Card.vue'
import APIService from '../services/service.js'

const projects = ref([])

onMounted(async () => {
  try {
    const data = await APIService.fetchProjects()
    projects.value = data?.data ?? []
  } catch (error) {
    console.error('Error fetching projects', error)
  }
})
</script>

<template>
  <div class="blog">
    <Card
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>
