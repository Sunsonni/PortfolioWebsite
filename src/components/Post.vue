<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { PortableText } from '@portabletext/vue'
import APIService from '../services/service.js'
import { urlFor } from '../sanity/image.js'

const route = useRoute()
const post = ref(null)
const loading = ref(true)

const formatDate = (value) =>
  value
    ? new Date(value).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''

const load = async (slug) => {
  loading.value = true
  post.value = await APIService.fetchPostBySlug(slug)
  loading.value = false
}

onMounted(() => load(route.params.slug))
watch(() => route.params.slug, load)
</script>

<template>
  <p v-if="loading">
    Loading…
  </p>
  <article v-else-if="post">
    <h1>{{ post.title }}</h1>
    <p v-if="post.publishedAt">
      {{ formatDate(post.publishedAt) }}
    </p>
    <img
      v-if="post.mainImage"
      :src="urlFor(post.mainImage).width(1200).height(600).fit('crop').url()"
      :alt="post.mainImage.alt ?? ''"
      width="1200"
      height="600"
    >
    <PortableText
      v-if="Array.isArray(post.body)"
      :value="post.body"
    />
    <router-link
      class="text-links"
      to="/Blog"
    >
      Back to all posts
    </router-link>
  </article>
  <p v-else>
    Post not found.
  </p>
</template>
