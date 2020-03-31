import React, { Component } from 'react';
import {
  AppBar,
  Paper,
  Toolbar,
  Typography,
  InputBase,
  IconButton
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Table from '../table/table';
import SearchIcon from '@material-ui/icons/Search';


const Home = (props) => {
  const {
    classes,
    tableHead,
    tableBody,
    handleOpen,
    handleOnSearch
  } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Contact List
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper style={{ display: 'flex', backgroundColor: '#f4f4f4', borderRadius: 30 }}>
        <IconButton disabled={true}>
          <SearchIcon />
        </IconButton>
        <InputBase
          fullWidth
          placeholder="Search contact..."
          onChange={handleOnSearch}
        />
      </Paper>
      <Paper elevation={3}>
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
