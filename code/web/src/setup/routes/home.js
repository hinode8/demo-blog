// App Imports
import Home from '../../modules/pages/Home'
import Posts from '../../modules/pages/Posts'
import NewPost from '../../modules/pages/NewPost'
import HowItWorks from '../../modules/pages/HowItWorks'
import WhatsNew from '../../modules/pages/WhatsNew'

// Home routes
export default {
  home: {
    path: '/',
    component: Home,
    exact: true
  },

  posts: {
    path: '/posts',
    component: Posts
  },

  newPost: {
    path: '/new-post',
    component: NewPost
  },

  whatsNew: {
    path: '/whats-new',
    component: WhatsNew
  }
}
