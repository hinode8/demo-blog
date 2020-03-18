// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// BlogPost type
const BlogPostType = new GraphQLObjectType({
  name: 'blogPost',
  description: 'BlogPost Type',

  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default BlogPostType