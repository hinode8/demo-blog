// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H2, H5 } from '../../ui/typography'
import ImageTile from '../../ui/image/Tile'

// App Imports
import { APP_URL } from '../../setup/config/env'

// Component
const NewPost = (props) => (
  <Grid alignCenter={true} style={{ padding: '2em' }}>
    {/* SEO */}
    <Helmet>
      <title>Monthly supply of clothes and accessories for Women - Crate</title>
    </Helmet>

    {/* Content */}
    <GridCell style={{ textAlign: 'center' }}>
      <Grid>
        <GridCell justifyCenter={true}>
          <ImageTile width={120} height={120} style={{marginRight:"Auto", marginLeft:"Auto"}} image={`${APP_URL}/images/stock/newpost/1.png`} />
        </GridCell>
      </Grid>
      <H2 font="secondary">Create a Post</H2>

      <H5 style={{ marginTop: '0.5em' }}>Keep it real and make the world better place!</H5>

    </GridCell>
  </Grid>
)

// Component Properties
NewPost.propTypes = {
  user: PropTypes.object.isRequired
}

// Component State
function newPostState(state) {
  return {
    user: state.user
  }
}

export default connect(newPostState, {})(NewPost)
