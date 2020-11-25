import React, { useEffect, useState } from 'react';
import useStyles from './TitlePartStyles';
import Grid from '@material-ui/core/Grid';
import { TextField, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchForm from '../searchForm/SearchForm';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import Slider from './Slider/Slider';
import { listOfAvCarsRequest } from '../../api/carClient';
const TitlePart = () => {
  const classes = useStyles();
  const cars = [
    {
      bodyType: 'Hatchback',
      brand: 'Kia',
      class: 'B',
      color: 'Biały',
      engineCapacity: '1.4',
      gearbox: 'M',
      id: 1,
      image: 'https://www.newsauto.pl/wp-content/uploads/2018/03/kia-gene-rio1.jpg',
      model: 'Rio',
      roofRack: false,
      seats: 5,
      trunkCapacity: '400L',
      year: 2012,
    },
    {
      id: 2,
      class: 'B',
      brand: 'Toyota',
      model: 'Yaris',
      year: 2015,
      color: 'Czerwony',
      engineCapacity: '1.0',
      seats: 5,
      gearbox: 'M',
      trunkCapacity: '768L',
      roofRack: false,
      bodyType: 'Hatchback',
      image:
        'https://ocdn.eu/pulscms-transforms/1/JiNktkuTURBXy8wZDczN2QxNC03MTU3LTRiMWYtYjA4ZS02YjA2Y2M2ODMyMTUuanBlZ5GVAs0EsM0CpMLD',
    },
    {
      id: 3,
      class: 'B',
      brand: 'Opel',
      model: 'Corsa',
      year: 2016,
      color: 'Zielony',
      engineCapacity: '1.6 T',
      seats: 5,
      gearbox: 'A',
      trunkCapacity: '1100L',
      roofRack: false,
      bodyType: 'Hatchback',
      image: 'https://www.autobaza.pl/blog/wp-content/uploads/2019/06/corsa-740x431@2x.jpg',
    },
    {
      id: 4,
      class: 'D',
      brand: 'Volkswagen',
      model: 'Passat',
      year: 2016,
      color: 'Szary',
      engineCapacity: '2.0',
      seats: 5,
      gearbox: 'M',
      trunkCapacity: '1150L',
      roofRack: false,
      bodyType: 'Kombi',
      image: 'https://i.wpimg.pl/1200x0/m.autokult.pl/vw-passat-rline-2019-5-e3cfb69cb.jpg',
    },
    {
      id: 10,
      class: 'D',
      brand: 'Mazda',
      model: '6',
      year: 2015,
      color: 'Czerwony',
      engineCapacity: '2.0 Skyaktiv',
      seats: 5,
      gearbox: 'AT',
      trunkCapacity: '1400L',
      roofRack: true,
      bodyType: 'Sedan',
      image:
        'https://wokolmotoryzacji.pl/wp-content/uploads/2020/04/2023-mazda-6-rendering-1024x576.jpg',
    },
    {
      id: 11,
      class: 'D',
      brand: 'Ford',
      model: 'Mondeo',
      year: 2016,
      color: 'Czarny',
      engineCapacity: '2.0 TDCi',
      seats: 5,
      gearbox: 'M',
      trunkCapacity: '1450L',
      roofRack: false,
      bodyType: 'Sedan',
      image:
        'https://img.tipcars.com/fotky_velke/18082919_1/1572854594/E/ford-mondeo-2-0-tdci-titanium.jpg',
    },
    {
      id: 12,
      class: 'F',
      brand: 'Audi',
      model: 'A8',
      year: 2016,
      color: 'Czarny',
      engineCapacity: '4.2 TDI',
      seats: 5,
      gearbox: 'AT',
      trunkCapacity: '1700L',
      roofRack: false,
      bodyType: 'Sedan',
      image: 'https://i.wpimg.pl/730x0/m.autokult.pl/2021-audi-a8-l-security--ec2f982.jpg',
    },
    {
      id: 13,
      class: 'F',
      brand: 'Audi',
      model: 'A6',
      year: 2017,
      color: 'Niebieski',
      engineCapacity: '3.0 TDI',
      seats: 5,
      gearbox: 'AT',
      trunkCapacity: '1570L',
      roofRack: true,
      bodyType: 'Sedan',
      image: 'https://i.wpimg.pl/985x0/m.autokult.pl/audi-a6-ae1f38db7ee5e6b7d4322d1d.jpg',
    },
  ];

  return (
    <Grid container className={classes.background}>
      <Grid container className={classes.bar}>
        <Grid container item className={classes.form} md={6} xs={12}>
          <Grid item>
            <Grid item>
              <Slider dane={cars}></Slider>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item className={classes.titlebox} md={6} xs={12}>
          <Grid item>
            <Typography className={classes.title}>
              Wypożyczalnia samochodów w Częstochowie. Z nami dojedziesz tam, gdzie chcesz.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TitlePart;
