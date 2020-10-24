import React, { useEffect, useState } from 'react';
import useStyles from './SearchFormStyles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { listOfCarsRequest } from '../../api/carClient';
const SearchForm = () => {
  const classes = useStyles();
  const [data, setData] = useState();
  async function fetchData() {
    const response = await listOfCarsRequest();
    setData(response.data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Grid container className={classes.background} justify="space-around">
      <Grid item xs={12}>
        <TextField
          id="standard-full-width"
          label="Wpisz adres odbioru"
          variant="outlined"
          fullWidth
          className={classes.addressInput}
          margin="dense"
        />
      </Grid>
      <Grid item xs={6} md={6}>
        <TextField
          id="date"
          label="Data odbioru"
          type="date"
          className={classes.firstDate}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={6} md={6}>
        <TextField
          id="date"
          label="Data zwrotu"
          type="date"
          className={classes.secondDate}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>

      <Grid item xs={12}>
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
  );
};

export default SearchForm;
