import React, { Component } from 'react';
import {
  AppBar,
  Paper,
  Toolbar,
  Typography
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Table from '../table/table';

const Home = (props) => {
  const {
    classes,
    tableHead,
    tableBody,
    handleOpen
  } = props;

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Contact List
            </Typography>
          </Toolbar>
        </AppBar>
        <Table 
          tableHead={tableHead}
          tableBody={tableBody}
          handleOpen={handleOpen}
        />
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Home);
