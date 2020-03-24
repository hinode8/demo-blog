// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H2, H5 } from '../../ui/typography'
import Button from '../../ui/button'
import ImageTile from '../../ui/image/Tile'
import { level1 } from '../../ui/common/shadows'

// App Imports
import { APP_URL } from '../../setup/config/env'
import crateRoutes from '../../setup/routes/crate'
import userRoutes from '../../setup/routes/user'

// Component
const Posts = (props) => (
  <Grid alignCenter={true} style={{ padding: '2em' }}>
    {/* SEO */}
    <Helmet>
      <title>Posts</title>
    </Helmet>


    <GridCell style={{ textAlign: 'center' }}>
      <H2 font="secondary">Blog Posts</H2>

      <H5 style={{ marginTop: '0.5em' }}>list of blog posts</H5>

      {/* Call to action */}
      {
        props.user.isAuthenticated
          ? <Link to={crateRoutes.list.path}>
              <Button theme="secondary" style={{ marginTop: '1em' }}>Get Subscription</Button>
            </Link>
          : <Link to={userRoutes.signup.path}>
              <Button theme="secondary" style={{ marginTop: '1em' }}>Get Started</Button>
            </Link>
      }
    </GridCell>
  </Grid>
)

// Component Properties
Posts.propTypes = {
  user: PropTypes.object.isRequired
}

// Component State
function postsState(state) {
  return {
    user: state.user
  }
}

export default connect(postsState, {})(Posts)
