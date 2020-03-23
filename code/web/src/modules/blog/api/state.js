// Imports

// App Imports
import {
  BLOG_POSTS_GET_LIST_REQUEST,
  BLOG_POSTS_GET_LIST_RESPONSE,
  BLOG_POSTS_GET_LIST_FAILURE,
  BLOG_POSTS_GET_REQUEST,
  BLOG_POSTS_GET_RESPONSE,
  BLOG_POSTS_GET_FAILURE,
} from './actions'

// BlogPosts list

// Initial State
const blogPostsInitialState = {
  isLoading: false,
  error: null,
  list: []
}

// State
export const blogPosts = (state = blogPostsInitialState, action) => {
  switch (action.type) {
    case BLOG_POSTS_GET_LIST_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case BLOG_POSTS_GET_LIST_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        list: action.list
      }

    case BLOG_POSTS_GET_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}

// Single blogPost

// Initial State
const blogPostInitialState = {
  isLoading: false,
  error: null,
  item: {}
}

// State
export const blogPost = (state = blogPostInitialState, action) => {
  switch (action.type) {
    case BLOG_POSTS_GET_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case BLOG_POSTS_GET_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        item: action.item
      }

    case BLOG_POSTS_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}