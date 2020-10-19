import React, { useEffect, useState } from 'react';
import useStyles from './TitlePartStyles';
import Grid from '@material-ui/core/Grid';
import { TextField, Typography } from '@material-ui/core';
import { listOfCarsRequest } from '../../api/carClient';
import Autocomplete from '@material-ui/lab/Autocomplete';
const TitlePart = () => {
  const [data, setData] = useState();
  const classes = useStyles();
  async function fetchData() {
    const response = await listOfCarsRequest();
    setData(response.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid container className={classes.background}>
      <Grid item className={classes.bar}>
        <Grid container className={classes.textbox}>
          <Typography className={classes.title}>
            Wypożyczalnia samochodów
            <br />w Częstochowie. <br /> Z nami dojedziesz tam,
            <br /> gdzie chcesz.
          </Typography>
        </Grid>
        <Grid item className={classes.bgform}></Grid>
        <Grid item className={classes.searchbtn}>
          {/* <Typography variant="h4" className={classes.searchcar}> */}
          <Autocomplete
            id="combo-box-demo"
            options={data}
            getOptionLabel={(option) => option.brand}
            style={{ width: 550, backgroundColor: `white` }}
            renderInput={(params) => (
              <TextField {...params} label="Wybierz samochód" variant="outlined" />
            )}
          ></Autocomplete>
          {/* </Typography> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TitlePart;
