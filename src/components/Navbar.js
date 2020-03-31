import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core/';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          React material ui sample
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;