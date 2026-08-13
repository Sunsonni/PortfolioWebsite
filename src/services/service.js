import { client } from '../sanity/client.js'
import {
  POSTS_QUERY,
  POST_QUERY,
  PROJECTS_QUERY,
  PROJECT_QUERY,
} from '../sanity/queries.js'

const APIService = {
  fetchPosts: async () => {
    try {
      return await client.fetch(POSTS_QUERY)
    } catch (error) {
      console.error('Failed to fetch posts:', error)
      return []
    }
  },
  fetchPostBySlug: async (slug) => {
    try {
      return await client.fetch(POST_QUERY, { slug })
    } catch (error) {
      console.error('Failed to fetch post:', error)
      return null
    }
  },
  fetchProjects: async () => {
    try {
      return await client.fetch(PROJECTS_QUERY)
    } catch (error) {
      console.error('Failed to fetch projects:', error)
      return []
    }
  },
  fetchProjectBySlug: async (slug) => {
    try {
      return await client.fetch(PROJECT_QUERY, { slug })
    } catch (error) {
      console.error('Failed to fetch project:', error)
      return null
    }
  },
}

export default APIService
