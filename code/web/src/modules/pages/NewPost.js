// Imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

// UI Imports
import { H2, H5 } from '../../ui/typography';
import Button from '@material-ui/core/Button';
import Icon from '../../ui/icon';
import { Grid, GridCell } from '../../ui/grid';
import ImageTile from '../../ui/image/Tile';
import { Input, Textarea } from '../../ui/input';
import { white } from '../../ui/common/colors'

// App Imports
import { APP_URL } from '../../setup/config/env';

// Component
class NewPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogPost: {
        id: 0,
        title: '',
        content: '',
      },
    };

    // Function bindings
  }

  onChange = event => {
    let blogPost = this.state.blogPost;
    blogPost[event.target.name] = event.target.value;

    this.setState({
      blogPost,
    });
  };

  onSubmit = event => {
    event.preventDefault();

    this.setState({
      isLoading: true,
    });

    this.props.messageShow('Saving crate, please wait...');

  };

  render() {
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
                {/* Title */}
                <Input
                  type="text"
                  fullWidth={true}
                  placeholder="Title"
                  required="required"
                  name="title"
                  value={this.state.blogPost.title}
                  onChange={this.onChange}
                  style={{ marginTop: '1em' }}
                />
                {/* Description */}
                <Textarea
                  fullWidth={true}
                  placeholder="Content"
                  required="required"
                  name="content"
                  value={this.state.blogPost.content}
                  onChange={this.onChange}
                  style={{ marginTop: '1em' }}
                />
              </div>
              <div style={{ marginTop: '2em', textAlign: 'center' }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={this.state.isLoading}
                >
                  <Icon size={1.2} style={{ color: white }}>
                    check
                  </Icon>{' '}
                  Save
                </Button>
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
