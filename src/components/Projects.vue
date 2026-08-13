<script setup>
import { ref, onMounted } from 'vue'
import Card from './Card.vue'
import APIService from '../services/service.js'

const projects = ref([])
const loading = ref(true)

onMounted(async () => {
  projects.value = await APIService.fetchProjects()
  loading.value = false
})
</script>

<template>
  <div class="blog">
    <p v-if="loading">
      Loading projects…
    </p>
    <p v-else-if="!projects.length">
      No projects yet.
    </p>
    <Card
      v-for="project in projects"
      v-else
      :key="project._id"
      :project="project"
    />
  </div>
</template>
