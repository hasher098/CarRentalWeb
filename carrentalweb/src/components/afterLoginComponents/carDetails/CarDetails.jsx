import React, { useState, useEffect } from 'react';
import useStyles from './CarDetailsStyles';
import { AppBar, Typography, Box } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const CarDetails = (props) => {
  const classes = useStyles();
  console.log(props.location.carDetails.data);
  return <Typography></Typography>;
};
export default CarDetails;
