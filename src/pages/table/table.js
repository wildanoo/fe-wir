import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';


const TableList = (props) => {
  const {
    classes,
    tableHead,
    tableBody,
    handleOpen
  } = props;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHead &&
              tableHead.map((head) => {
                return (
                  <TableCell>{head}</TableCell>
                )
              })
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {tableBody.map((body, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {body.name}
                </TableCell>
                <TableCell>{body.phone}</TableCell>
                <TableCell>
                  <Button onClick={handleOpen(body.id)} variant="contained" color="primary">Edit</Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default withStyles(styles)(TableList);