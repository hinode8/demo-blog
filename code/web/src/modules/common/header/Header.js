// Imports
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// UI Imports
import { Grid, GridCell } from '../../../ui/grid';
import { primary as primaryGradient } from '../../../ui/common/gradients';
import { level1 } from '../../../ui/common/shadows';

// App Imports
import home from '../../../setup/routes/home';
import user from '../../../setup/routes/user';
import crate from '../../../setup/routes/crate';
import admin from '../../../setup/routes/admin';
import blogPost from '../../../setup/routes/blogPost';
import Logo from './Logo';
import Menu from './Menu';
import MenuItem from './MenuItem';
import H4 from './../../../ui/typography/H4';
import Icon from './../../../ui/icon/Icon';
import { StylesProvider } from '@material-ui/core';
import AccountButton from './AccountButton';

// Component
const Header = props => {
  return (
    <header
      style={{
        backgroundImage: primaryGradient,
        boxShadow: level1,
        padding: '0 2em',
        height: '5em',
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
      }}
    >
      <Grid alignCenter={true} style={{ marginTop: '0.6em' }}>
        <GridCell>
          {/* Logo */}
          <Logo style={{ float: 'left' }} />

          {/* Left menu */}
          {props.user.isAuthenticated ? 
              props.user.details.role === 'ADMIN' ? (
                // admin menu
                <Menu
                  style={{ float: 'left', marginTop: '1.5em', marginLeft: '2em' }}
                >
                  <MenuItem to={blogPost.blogPostList.path}>Blog posts</MenuItem>
                  <MenuItem to={blogPost.blogPostCreate.path}>Create Post</MenuItem>
                </Menu>
              )
              : props.user.details.role === 'USER' ? ( 
                // user menu
                <Menu
                  style={{ float: 'left', marginTop: '1.5em', marginLeft: '2em' }}
                >
                >
                  <MenuItem to={blogPost.blogPostList.path}>Blog posts</MenuItem>
                  <MenuItem to={blogPost.blogPostCreate.path}>Create Post</MenuItem>
                </Menu>
              ) :  (
                // unreachable code 
                <div></div>
              )
           : (
            <Menu
              style={{ float: 'left', marginTop: '1.5em', marginLeft: '2em' }}
            >
              <MenuItem to={home.whatsNew.path}>All</MenuItem>
            </Menu>
          )}
        </GridCell>

        {/* Right menu */}
        <GridCell style={{ textAlign: 'right' }}>
          {props.user.isAuthenticated ? (
            <Menu> 
              <MenuItem to={crate.list.path}>Crates</MenuItem>

              <MenuItem to={user.subscriptions.path}>Subscriptions</MenuItem>

              <AccountButton to={user.profile.path} style={{ borderStyle:'solid', borderWidth:'1px', marginLeft:'10px'}}>
                {props.user.details.name}<Icon size={1.5}>person</Icon>
              </AccountButton>
            </Menu>
          ) : (
            <Menu>
              <MenuItem to={user.login.path}>Login</MenuItem>

              <MenuItem to={user.signup.path}>Signup</MenuItem>
            </Menu>
          )}
        </GridCell>
      </Grid>
    </header>
  );
};

// Component Properties
Header.propTypes = {
  user: PropTypes.object.isRequired,
};

// Component State
function headerState(state) {
  return {
    user: state.user,
  };
}

export default withRouter(connect(headerState, {})(Header));
