<script setup>
import { ref, onMounted } from 'vue'
import APIService from '../services/service.js'
import { urlFor } from '../sanity/image.js'

const posts = ref([])
const loading = ref(true)

const formatDate = (value) =>
  value
    ? new Date(value).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''

onMounted(async () => {
  posts.value = await APIService.fetchPosts()
  loading.value = false
})
</script>

<template>
  <div class="flex items-center justify-center h-screen w-screen">
    <p v-if="loading">
      Loading posts…
    </p>
    <p v-else-if="!posts.length">
      No posts yet.
    </p>
    <article
      v-for="post in posts"
      v-else
      :key="post._id"
      class="card"
    >
      <img
        v-if="post.mainImage"
        :src="urlFor(post.mainImage).width(600).height(300).fit('crop').url()"
        :alt="post.mainImage.alt ?? ''"
        width="600"
        height="300"
        loading="lazy"
      >
      <div class="card-body">
        <h2 class="card-title">
          <router-link
            class="text-links"
            :to="`/post/${post.slug}`"
          >
            {{ post.title }}
          </router-link>
        </h2>
        <p
          v-if="post.publishedAt"
          class="card-text"
        >
          {{ formatDate(post.publishedAt) }}
        </p>
        <p
          v-if="post.excerpt"
          class="card-text"
        >
          {{ post.excerpt }}
        </p>
      </div>
    </article>
  </div> 
</template>
