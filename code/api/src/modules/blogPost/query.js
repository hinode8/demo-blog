// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import BlogPostType from './types'
import { getAll, getById } from './resolvers'

// BlogPosts All
export const blogPosts = {
  type: new GraphQLList(BlogPostType),
  args: {
    orderBy: { type: GraphQLString }
  },
  resolve: getAll
}

// BlogPost By ID
export const blogPostById = {
  type: BlogPostType,
  args: {
    blogPostId: { type: GraphQLInt }
  },
  resolve: getById
}