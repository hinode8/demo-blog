// Imports
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import admin from '../../setup/routes/admin';
import { black } from '../../ui/common/colors';
import { Grid, GridCell } from '../../ui/grid';
import Icon from '../../ui/icon';
// UI Imports
import { H2 } from '../../ui/typography';
import { messageHide, messageShow } from '../common/api/actions';
import EmptyMessage from '../common/EmptyMessage';
import Loading from '../common/Loading';
// App Imports
import { getList as getBlogPostList, remove as removeBlogPost } from './api/actions';

// Component
class List extends PureComponent {
  // Runs on server only for SSR
  static fetchData({ store }) {
    return store.dispatch(getBlogPostList('DESC'));
  }

  // Runs on client only
  componentDidMount() {
    this.props.getBlogPostList('DESC');
  }

  remove = id => {
    if (id > 0) {
      let check = confirm('Are you sure you want to delete this blogPost?');

      if (check) {
        this.props.messageShow('Deleting, please wait...');

        this.props
          .removeBlogPost({ id })
          .then(response => {
            if (response.status === 200) {
              if (response.data.errors && response.data.errors.length > 0) {
                this.props.messageShow(response.data.errors[0].message);
              } else {
                this.props.messageShow('BlogPost deleted successfully.');

                this.props.getBlogPostList(false);
              }
            } else {
              this.props.messageShow('Please try again.');
            }
          })
          .catch(error => {
            this.props.messageShow('There was some error. Please try again.');
          })
          .then(() => {
            this.setState({
              isLoading: false,
            });

            window.setTimeout(() => {
              this.props.messageHide();
            }, 5000);
          });
      }
    }
  };

  render() {
    let blogPosts = this.props.blogPosts;
    
    const { isLoading, list } = this.props.blogPosts;

    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>BlogPosts - Admin - BlogPost</title>
        </Helmet>

        {/* Page Content */}
        <Grid  alignCenter={true} >
          <Grid alignCenter={true} style={{ width: '100%'}}>
            <GridCell style={{ textAlign: 'center' }}>
              <H2 font="secondary"> Blog Posts </H2>
            </GridCell>
          </Grid>

          {/* BlogPost list */}
          <Grid alignCenter={true} style={{ width: '100%', padding:'1em' }}>
            <GridCell>
              <table className="striped">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Created at</th>
                    <th>Updated at</th>
                    <th style={{ textAlign: 'center' }}>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {isLoading ? (
                    <tr>
                      <td colSpan="6">
                        <Loading message="loading blogPosts..." />
                      </td>
                    </tr>
                  ) : list.length > 0 ? (
                    list.map(
                      ({
                        id,
                        title,
                        content,
                        createdAt,
                        updatedAt,
                      }) => (
                        <tr key={id}>
                          <td>{title}</td>

                          <td>{content}</td>

                          <td>
                            {new Date(parseInt(createdAt)).toDateString()}
                          </td>

                          <td>
                            {new Date(parseInt(updatedAt)).toDateString()}
                          </td>

                          <td style={{ textAlign: 'center' }}>
                            <Link to={admin.blogPostEdit.path(id)}>
                              <Icon size={2} style={{ color: black }}>
                                mode_edit
                              </Icon>
                            </Link>

                            <span
                              style={{ cursor: 'pointer' }}
                              onClick={this.remove.bind(this, id)}
                            >
                              <Icon size={2} style={{ marginLeft: '0.5em' }}>
                                delete
                              </Icon>
                            </span>
                          </td>
                        </tr>
                      ),
                    )
                  ) : (
                    <tr>
                      <td colSpan="6">
                        <EmptyMessage message="No blogPosts to show." />
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </GridCell>
          </Grid>
        </Grid>
      </div>
    );
  }
}

// Component Properties
List.propTypes = {
  blogPosts: PropTypes.object.isRequired,
  getBlogPostList: PropTypes.func.isRequired,
  removeBlogPost: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired,
};

// Component State
function listState(state) {
  console.log(state)
  return {
    blogPosts: state.blogPosts,
  };
}

export default connect(listState, {
  getBlogPostList,
  removeBlogPost,
  messageShow,
  messageHide,
})(List);
