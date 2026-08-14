<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}

const handleClickOutside = (event) => {
  if (!event.target.closest('.navbar')) {
    isOpen.value = false
  }
}

watch(isOpen, (open) => {
  if (open) {
    document.addEventListener('click', handleClickOutside)
  } else {
    document.removeEventListener('click', handleClickOutside)
  }
})

watch(
  () => route.path,
  () => {
    isOpen.value = false
  }
)

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <nav
    id="navbar-margin"
    class="navbar navbar-expand-md fixed-top nav-bar ps-4"
  >
    <router-link
      class="navbar-brand"
      to="/"
    >
      <h1 class="title">
        Sonnie Nguyen
      </h1>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      aria-label="Toggle navigation"
      @click="toggle"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div
      class="collapse navbar-collapse"
      :class="{ show: isOpen }"
    >
      <ul class="navbar-nav ms-auto pe-4">
        <li class="nav-item">
          <router-link
            to="/About"
            class="nav-link"
          >
            About
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/Projects"
            class="nav-link"
          >
            Projects
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/Blog"
            class="nav-link"
          >
            Blog
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/Resume"
            class="nav-link"
          >
            Resume
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
