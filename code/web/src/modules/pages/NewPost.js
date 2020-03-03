// Imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

// UI Imports
import { H2, H5 } from '../../ui/typography';
import { Grid, GridCell } from '../../ui/grid';
import ImageTile from '../../ui/image/Tile';
import Input from '../../ui/input/Input';

// App Imports
import { APP_URL } from '../../setup/config/env';

// Component
class NewPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: '',
      },
    };

    // Function bindings
  }

  onChange = event => {};

  onSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { isLoading, error } = this.props.user;

    return (
      <Grid gutter={true} alignCenter={true} style={{ padding: '2em' }}>
        <Grid alignCenter={true} style={{ width: '100%' }}>
          {/* SEO */}I
          <Helmet>
            <title>
              Monthly supply of clothes and accessories for Women - Crate
            </title>
          </Helmet>
          {/* Content */}
          <GridCell style={{ textAlign: 'center' }}>
            <Grid>
              <GridCell justifyCenter={true}>
                <ImageTile
                  width={120}
                  height={120}
                  style={{ marginRight: 'Auto', marginLeft: 'Auto' }}
                  image={`${APP_URL}/images/stock/newpost/1.png`}
                />
              </GridCell>
            </Grid>
            <H2 font="secondary">Create a Post</H2>

            <H5 style={{ marginTop: '0.5em' }}>
              Keep it real and make the world better place!
            </H5>
          </GridCell>
        </Grid>
        <Grid alignCenter={true} style={{ width: '100%' }}>
          <GridCell style={{ textAlign: 'center' }}>
            {/* Login Form */}
            <form onSubmit={this.onSubmit}>
              <div style={{ width: '25em', margin: '0 auto' }}>
                {/* Email */}
                <Input
                  type="email"
                  fullWidth={true}
                  placeholder="Email"
                  required="required"
                  name="email"
                  value={this.state.user.email}
                  onChange={this.onChange}
                  style={{ marginTop: '1em' }}
                />

              </div>
            </form>
          </GridCell>
        </Grid>
      </Grid>
    );
  }
}
// Component Properties
NewPost.propTypes = {
  user: PropTypes.object.isRequired,
};

// Component State
function newPostState(state) {
  return {
    user: state.user,
  };
}

export default connect(newPostState, {})(NewPost);
