require('normalize.css');
require('styles/App.scss');

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { Link } from 'react-router';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  toggleNavigation() {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div id="main">
        <AppBar
          title="React Material Dashboard"
          onLeftIconButtonTouchTap={this.toggleNavigation}
        />
        <LeftNav
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}
        >
          <Link to="/home" onTouchTap={this.toggleNavigation}>
            <MenuItem>Home</MenuItem>
          </Link>
          <Link to="/table" onTouchTap={this.toggleNavigation}>
            <MenuItem>Table</MenuItem>
          </Link>
        </LeftNav>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
