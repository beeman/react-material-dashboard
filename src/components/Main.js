require('normalize.css');
require('styles/App.scss');

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.showNavigation = this.showNavigation.bind(this);
  }

  showNavigation() {
    this.setState({open: true});
  }

  render() {
    return (
      <div>
        <AppBar
          title="React Material Dashboard"
          onLeftIconButtonTouchTap={this.showNavigation}
        />
        <LeftNav
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </LeftNav>
      </div>
    );
  }
}

export default Main;
