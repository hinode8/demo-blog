// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

// Actions Types
export const BLOG_POSTS_GET_LIST_REQUEST = 'BLOG_POSTS/GET_LIST_REQUEST'
export const BLOG_POSTS_GET_LIST_RESPONSE = 'BLOG_POSTS/GET_LIST_RESPONSE'
export const BLOG_POSTS_GET_LIST_FAILURE = 'BLOG_POSTS/GET_LIST_FAILURE'
export const BLOG_POSTS_GET_REQUEST = 'BLOG_POSTS/GET_REQUEST'
export const BLOG_POSTS_GET_RESPONSE = 'BLOG_POSTS/GET_RESPONSE'
export const BLOG_POSTS_GET_FAILURE = 'BLOG_POSTS/GET_FAILURE'

// Actions

// Get list of blogPost
export function getList(orderBy = 'DESC', isLoading = true) {
  return dispatch => {
    dispatch({
      type: BLOG_POSTS_GET_LIST_REQUEST,
      error: null,
      isLoading
    })

    return axios.post(routeApi, query({
      operation: 'blogPosts',
      variables: { orderBy },
      fields: ['id', 'title', 'content', 'createdAt', 'updatedAt']
    }))
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: BLOG_POSTS_GET_LIST_RESPONSE,
            error: null,
            isLoading: false,
            list: response.data.data.blogPosts
          })
        } else {
          console.error(response)
        }
      })
      .catch(error => {
        dispatch({
          type: BLOG_POSTS_GET_LIST_FAILURE,
          error: 'Some error occurred. Please try again.',
          isLoading: false
        })
      })
  }
}

// Get single BlogPost
export function get(slug, isLoading = true) {
  return dispatch => {
    dispatch({
      type: BLOG_POSTS_GET_REQUEST,
      isLoading
    })

    return axios.post(routeApi, query({
      operation: 'blogPost',
      variables: { slug },
      fields: ['id', 'title', 'slug', 'content', 'image', 'createdAt']
    }))
      .then(response => {
        dispatch({
          type: BLOG_POSTS_GET_RESPONSE,
          error: null,
          isLoading: false,
          item: response.data.data.blogPost
        })
      })
      .catch(error => {
        dispatch({
          type: BLOG_POSTS_GET_FAILURE,
          error: 'Some error occurred. Please try again.',
          isLoading: false
        })
      })
  }
}

// Get single blogPost by Id
export function getById(blogPostId) {
  return dispatch => {
    return axios.post(routeApi, query({
      operation: 'blogPostById',
      variables: { blogPostId },
      fields: ['id', 'title', 'content']
    }))
  }
}

// Create or update blogPost
export function createOrUpdate(blogPost) {
  if (blogPost.id > 0) {
    return update(blogPost)
  } else {
    delete blogPost.id
    return create(blogPost)
  }
}

// Create blogPost
export function create(variables) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'blogPostCreate',
      variables,
      fields: ['id']
    }))
  }
}

// Update blogPost
export function update(blogPost) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'blogPostUpdate',
      variables: blogPost,
      fields: ['id']
    }))
  }
}

// Remove blogPost
export function remove(variables) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'blogPostRemove',
      variables,
      fields: ['id']
    }))
  }
}
