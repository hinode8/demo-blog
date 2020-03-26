// Imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link, withRouter } from 'react-router-dom';

// UI Imports
import { H2, H5 } from '../../ui/typography';
import Button from '@material-ui/core/Button';
import Icon from '../../ui/icon';
import { Grid, GridCell } from '../../ui/grid';
import ImageTile from '../../ui/image/Tile';
import { Input, Textarea } from '../../ui/input';
import { white } from '../../ui/common/colors';

// App Imports
import admin from '../../setup/routes/admin';
import { APP_URL } from '../../setup/config/env';
import {
  createOrUpdate as blogPostCreateOrUpdate,
  getById as getBlogPostById,
} from '../blog/api/actions';
import { messageShow, messageHide } from '../common/api/actions';

// Component
class CreateOrEdit extends Component {
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

    this.props.messageShow('Saving blogPost, please wait...');

    // Save blogPost
    this.props
      .blogPostCreateOrUpdate(this.state.blogPost)
      .then(response => {
        this.setState({
          isLoading: false,
        });

        if (response.data.errors && response.data.errors.length > 0) {
          this.props.messageShow(response.data.errors[0].message);
        } else {
          this.props.messageShow('blogPost saved successfully.');
          this.props.history.push(admin.blogPostList.path);
        }
      })
      .catch(error => {
        this.props.messageShow('There was some error. Please try again.');

        this.setState({
          isLoading: false,
        });
      })
      .then(() => {
        window.setTimeout(() => {
          this.props.messageHide();
        }, 5000);
      });
  };

  render() {
    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>Create New Blog Post</title>
        </Helmet>
        {/* Content */}
        <Grid alignCenter={true} style={{ padding: '2em' }}> 
          <Grid alignCenter={true} style={{ width: '100%' }}>
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
              <H2 font="tertiary">Create a Post</H2>

              <H5 style={{ marginTop: '0.5em' }}>
                Keep it real and make the world better place!
              </H5>
            </GridCell>
          </Grid>
          {/* form */}
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
      </div>
    );
  }
}
// Component Properties
CreateOrEdit.propTypes = {
  blogPostCreateOrUpdate: PropTypes.func.isRequired,
  getBlogPostById: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired,
};

export default withRouter(
  connect(null, {
    blogPostCreateOrUpdate,
    getBlogPostById,
    messageShow,
    messageHide,
  })(CreateOrEdit),
);
