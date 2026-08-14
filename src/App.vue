<script setup>
import { computed, VueElement } from 'vue'
import { useRoute } from 'vue-router'
import Navigation from './Navigation.vue'
import Footer from './Footer.vue'

const route = useRoute()
const isHomePage = computed(() => route.path === '/')
</script>

<template>
  <div :class="['app-container', { 'home-page': isHomePage }]">
    <Navigation />
    <div :class="['content-container', { 'home-page': isHomePage }]">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
