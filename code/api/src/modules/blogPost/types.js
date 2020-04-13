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
    slug: { type: GraphQLString },
    area: { type: GraphQLInt },
    image: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default BlogPostType