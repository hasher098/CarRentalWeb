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
      <Grid container className={classes.bar}>
        <Grid item xs={12} md={6}>
          <Grid item className={classes.bgform}></Grid>
          <Grid item className={classes.searchbtn}>
            <Autocomplete
              id="combo-box-demo"
              options={data}
              getOptionLabel={(option) => option.brand}
              style={{ backgroundColor: `white` }}
              renderInput={(params) => (
                <TextField {...params} label="Wybierz samochód" variant="outlined" />
              )}
            ></Autocomplete>
          </Grid>
        </Grid>
        <Grid item className={classes.bar} xs={12} md={6}>
          <Typography className={classes.title}>
            Wypożyczalnia samochodów w Częstochowie. Z nami dojedziesz tam, gdzie chcesz.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TitlePart;
