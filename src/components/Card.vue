<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const placeholderClick = () => {
  window.open(props.project.link)
}
</script>

<template>
  <div
    class="project-card"
    @click="placeholderClick"
  >
    <div class="card">
      <div class="card-title nav-link">
        {{ project.Name }}
      </div>
      <div class="card-body">
        <p class="card-text">
          {{ project.Description }}
        </p>
      </div>
      <div class="cardButtons">
        <a
          class="projects-link"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          @click.stop
        >
          Github Link
        </a>
      </div>
    </div>
  </div>
</template>
