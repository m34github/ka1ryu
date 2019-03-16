import React from 'react';
import { AppBar, Icon, IconButton, Toolbar, Typography } from '@material-ui/core';

import { header } from '../style';

const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit">
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
    </>
  );
};

export default Header;
