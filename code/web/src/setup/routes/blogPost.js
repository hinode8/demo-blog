// App Imports
import params from '../../setup/config/params';
import BlogPostList from '../../modules/admin/blog/List';
import BlogPostCreateOrEdit from '../../modules/admin/blog/CreateOrEdit';

// Admin blogPost routes
export default {
  blogPostList: {
    path: '/blogPosts',
    component: BlogPostList,
    auth: true
  },

  blogPostCreate: {
    path: '/blogPost/create',
    component: BlogPostCreateOrEdit,
    auth: true
  },

  blogPostEdit: {
    path: (id = ':id') => `/blogPost/${id}/edit`,
    component: BlogPostCreateOrEdit,
    auth: true
  },
};
