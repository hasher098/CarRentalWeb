import React, { useState, useEffect } from 'react';
import useStyles from './CarDetailsStyles';
import { AppBar, Typography, Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const CarDetails = (props) => {
  const classes = useStyles();
  const data = props.location.carDetails.data;
  console.log(data.image);
  return (
    <Grid container item className={classes.container}>
      <Grid item className={classes.photobox} xs={12} md={6}>
      <img src={data.image} className={classes.photo}/>
      </Grid>
      
    </Grid>
  );
};
export default CarDetails;
