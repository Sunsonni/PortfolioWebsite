<script setup>
import { urlFor } from '../sanity/image.js'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="project-card">
    <div class="card">
      <img
        v-if="project.mainImage"
        :src="urlFor(project.mainImage).width(600).height(300).fit('crop').url()"
        :alt="project.mainImage.alt ?? ''"
        width="600"
        height="300"
        loading="lazy"
      >
      <div class="card-title nav-link">
        <router-link
          class="text-links"
          :to="`/project/${project.slug}`"
        >
          {{ project.title }}
        </router-link>
      </div>
      <div class="card-body">
        <p class="card-text">
          {{ project.description }}
        </p>
      </div>
      <div class="cardButtons">
        <a
          v-if="project.link"
          class="projects-link"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Link
        </a>
      </div>
    </div>
  </div>
</template>
