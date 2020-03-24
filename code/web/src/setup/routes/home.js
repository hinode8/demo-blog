// App Imports
import Home from '../../modules/pages/Home'
import WhatsNew from '../../modules/pages/WhatsNew'

// Home routes
export default {
  home: {
    path: '/',
    component: Home,
    exact: true
  }, 

  whatsNew: {
    path: '/whats-new',
    component: WhatsNew
  }
}
