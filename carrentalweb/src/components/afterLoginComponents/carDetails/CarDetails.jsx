import React, { useState, useEffect } from 'react';
import useStyles from './CarDetailsStyles';
import { AppBar, Typography, Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { listCar } from '../../../api/carClient';
import Button from '@material-ui/core/Button';
import Skeleton from '@material-ui/lab/Skeleton';
const CarDetails = ({ match }) => {
  const classes = useStyles();

  const {
    params: { carid },
  } = match;
  const [car, setCar] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchCar() {
    const response = await listCar(carid);
    setCar(response.data);
  }
  useEffect(() => {
    fetchCar(carid);
  }, []);

  useEffect(() => {
    if (car.length != 0) {
      setIsLoading(false);
    }
  }, [car]);

  return (
    <Grid container item className={classes.container}>
      {isLoading ? (
        <Skeleton variant="rect" width={400} height={200}></Skeleton>
      ) : (
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography className={classes.title}>{car.brand + ' ' + car.model}</Typography>
          </Grid>
          <Grid item className={classes.photobox} xs={12} md={6}>
            <img src={car.image} className={classes.photo} />
          </Grid>
          <Grid item className={classes.description} xs={12} md={6}>
            <Typography variant="h4">
              Marka:<span className={classes.description1}>{car.brand}</span>
            </Typography>
            <Typography variant="h4">
              Model: <span className={classes.description1}>{car.model}</span>
            </Typography>
            <Typography variant="h4">
              Rok produkcji: <span className={classes.description1}>{car.year}</span>
            </Typography>
            <Typography variant="h4">
              Kolor:<span className={classes.description1}>{car.color}</span>
            </Typography>
            <Typography variant="h4">
              Pojemność silnika:<span className={classes.description1}>{car.engineCapacity}</span>
            </Typography>
            <Typography variant="h4">
              Liczba siedzeń:<span className={classes.description1}>{car.seats}</span>
            </Typography>
            <Typography variant="h4">
              Skrzynia biegów:<span className={classes.description1}>{car.gearbox}</span>
            </Typography>
            <Typography variant="h4">
              Bagażnik:<span className={classes.description1}>{car.trunkCapacity}</span>
            </Typography>
            <Typography variant="h4">
              Typ nadwozia:<span className={classes.description1}>{car.bodyType}</span>
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Link to="/">
              <Button variant="contained" color="secondary" className={classes.button}>
                Powrót
              </Button>
            </Link>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
export default CarDetails;
