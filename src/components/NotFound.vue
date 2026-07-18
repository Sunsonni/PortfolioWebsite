<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleClick = () => {
  router.push('/')
}
</script>

<template>
  <h1>404 Page Not Found</h1>
  <p>let's get you back to our regularly scheduled programming. Shall we?</p>
  <button
    class="btn btn-primary"
    @click="handleClick"
  >
    Back home
  </button>
</template>
