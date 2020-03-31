import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import {
  AppBar,
  Backdrop,
  Fade,
  Grid,
  Modal,
  Toolbar,
  Typography
} from '@material-ui/core';


const Popup = (props) => {

  const {
    classes,
    handleClose,
    open,
    data
  } = props;

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.modalTitle}>
              <Typography variant="title" color="inherit">
                Detail Contact
              </Typography>
            </div>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.contentModal}
            >
              <Grid item xs={6}>Name</Grid>
              <Grid item xs={6}>{data.name}</Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.contentModal}
            >
              <Grid item xs={6}>Phone Number</Grid>
              <Grid item xs={6}>{data.phone}</Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.contentModal}
            >
              <Grid item xs={6}>Address</Grid>
              <Grid item xs={6}>{data.address}</Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default withStyles(styles)(Popup);