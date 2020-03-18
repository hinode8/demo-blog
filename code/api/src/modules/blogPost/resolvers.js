// App Imports
import models from '../../setup/models'
import params from '../../config/params'

// Get blogPost by ID
export async function getById(parentValue, { blogPostId }) {
  const blogPost = await models.BlogPost.findOne({ where: { id: blogPostId } })

  if (!blogPost) {
    // BlogPost does not exists
    throw new Error('The blogPost you are looking for does not exists or has been discontinued.')
  } else {
    return blogPost
  }
}

// Get all blogPosts
export async function getAll(parentValue, { orderBy }) {
  return await models.BlogPost.findAll({ order: [['id', orderBy]] })
}

// Create blogPost
export async function create(parentValue, { title, content }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.BlogPost.create({
      title,
      content
    })
  } else {
    throw new Error('Operation denied.')
  }
}

// Without authentication check For Test on GraphiQL 
// export async function create(parentValue, { title, content }, { auth }) { 
//     return await models.BlogPost.create({
//       title,
//       content
//     })
// }

// Update blogPost
export async function update(parentValue, { id, title, content }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.BlogPost.update(
      {
        title,
        content
      },
      {where: {id}}
    )
  } else {
    throw new Error('Operation denied.')
  }
}

// Delete blogPost
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.BlogPost.destroy({where: {id}})
  } else {
    throw new Error('Operation denied.')
  }
}
