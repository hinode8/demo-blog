// Imports
// import { GraphQLString, GraphQLInt } from 'graphql'
const { GraphQLString, GraphQLInt } = require( 'graphql');

// App Imports
import BlogPostType from './types'
import { create, remove, update } from './resolvers'

// BlogPost create
export const blogPostCreate = {
  type: BlogPostType,
  args: {
    title: {
      name: 'title',
      type: GraphQLString
    }, 
    content: {
      name: 'content',
      type: GraphQLString
    },
    slug: {
      name: 'slug',
      type: GraphQLString
    },
    area: {
      name: 'area',
      type: GraphQLInt
    },
    image: {
      name: 'image',
      type: GraphQLString
    }
  },
  resolve: create
}

// BlogPost update
export const blogPostUpdate = {
  type: BlogPostType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }, 
    title: {
      name: 'title',
      type: GraphQLString
    }, 
    content: {
      name: 'content',
      type: GraphQLString
    },
    slug: {
      name: 'slug',
      type: GraphQLString
    },
    area: {
      name: 'area',
      type: GraphQLInt
    },
    image: {
      name: 'image',
      type: GraphQLString
    }
  },
  resolve: update
}

// BlogPost remove
export const blogPostRemove = {
  type: BlogPostType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}