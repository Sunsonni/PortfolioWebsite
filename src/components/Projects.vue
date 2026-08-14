<script setup>
import { ref, onMounted } from 'vue'
import Card from './Card.vue'
import APIService from '../services/service.js'
import { BsSpinner } from '@wwtdev/bsds-components-vue3'

const projects = ref([])
const loading = ref(true)

onMounted(async () => {
  projects.value = await APIService.fetchProjects()
  console.log(projects.value)
  loading.value = false
})
</script>

<template>
  <div class="flex items-center justify-center h-screen w-screen">
      <BsSpinner
        v-if="loading"
        label="trying to load"
      ></BsSpinner>
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

<style>

</style>