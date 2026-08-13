<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import APIService from '../services/service.js'
import { urlFor } from '../sanity/image.js'

const route = useRoute()
const project = ref(null)
const loading = ref(true)

const load = async (slug) => {
  loading.value = true
  project.value = await APIService.fetchProjectBySlug(slug)
  loading.value = false
}

onMounted(() => load(route.params.slug))
watch(() => route.params.slug, load)
</script>

<template>
  <p v-if="loading">
    Loading…
  </p>
  <template v-else-if="project">
    <h1>{{ project.title }}</h1>
    <img
      v-if="project.mainImage"
      :src="urlFor(project.mainImage).width(1200).height(600).fit('crop').url()"
      :alt="project.mainImage.alt ?? ''"
      width="1200"
      height="600"
    >
    <p>{{ project.description }}</p>
    <a
      v-if="project.link"
      :href="project.link"
      target="_blank"
      rel="noopener noreferrer"
    >
      View on GitHub
    </a>
    <br>
    <router-link
      class="text-links"
      to="/Projects"
    >
      Back to all projects
    </router-link>
  </template>
  <p v-else>
    Project not found.
  </p>
</template>
