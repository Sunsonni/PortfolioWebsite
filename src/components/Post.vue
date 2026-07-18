<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getProjectById } from '../utils/projectUtils.js'

const route = useRoute()
const project = computed(() => getProjectById(route.params.id))
</script>

<template>
  <template v-if="project">
    <h1>{{ project.title }}</h1>
    <p>{{ project.description }}</p>
    <a
      :href="project.link"
      target="_blank"
      rel="noopener noreferrer"
    >
      View on GitHub
    </a>
  </template>
  <p v-else>
    Project not found.
  </p>
</template>
