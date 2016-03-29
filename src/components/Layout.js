require('normalize.css');
require('styles/App.scss');

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { Link } from 'react-router';
import IconButton from 'material-ui/lib/icon-button';

const githubButton = (
  <IconButton
    iconClassName="material-icons"
    href="https://github.com/lambdacdm/react-material-dashboard"
    linkButton={true}>
    code
  </IconButton>
);

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
    var navTitleStyle = {
      marginLeft: '-8px'
    };

    return (
      <div id="main">
        <AppBar
          title="React Material Dashboard"
          onLeftIconButtonTouchTap={this.toggleNavigation}
          iconElementRight={githubButton}
        />
        <LeftNav
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar
            title="RMD"
            showMenuIconButton={false}
            titleStyle={navTitleStyle}
          />
          <Link to="/home" onTouchTap={this.toggleNavigation} className="nav-link">
            <MenuItem>Home</MenuItem>
          </Link>
          <Link to="/table" onTouchTap={this.toggleNavigation} className="nav-link">
            <MenuItem>Table</MenuItem>
          </Link>
        </LeftNav>
        <div className="page-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
