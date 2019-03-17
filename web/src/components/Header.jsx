import React from 'react';
import {
  AppBar,
  Divider,
  Drawer,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography
} from '@material-ui/core';

import { header } from '../style';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    };
  }

  toggleDrawer(open) {
    this.setState({
      drawerOpen: open
    });
  };

  render() {
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" onClick={() => { this.toggleDrawer(true); }}>
              <Icon>menu</Icon>
            </IconButton>
            <Typography variant="h6" color="inherit" style={header.typography}>
              AR2
            </Typography>
            <IconButton color="inherit">
              <Icon>person</Icon>
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer open={this.state.drawerOpen} onClose={() => { this.toggleDrawer(false); }}>
          <div
            tabIndex={0}
            role="button"
            onClick={() => { this.toggleDrawer(false); }}
            onKeyDown={() => { this.toggleDrawer(false); }}
          >
            <List style={{
              width: 250
            }}>
              <ListItem>
                <ListItemText
                  primary="Select"
                  onClick={() => {
                    window.location.href = '/domain/select';
                  }}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="List"
                  onClick={() => {
                    window.location.href = '/domain/list';
                  }}
                />
              </ListItem>
              <Divider />
            </List>
          </div>
        </Drawer>
      </>
    );
  }
}

export default Header;
