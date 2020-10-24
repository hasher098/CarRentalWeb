import React from 'react';
import useStyles from './TitlePartStyles';
import Grid from '@material-ui/core/Grid';
import { TextField, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchForm from '../searchForm/SearchForm';
const TitlePart = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.background}>
      <Grid container className={classes.bar}>
        <Grid item xs={12} md={6} className={classes.firstPart}>
          <Grid item className={classes.searchBox}>
            <Grid item className={classes.bgform}>
              <SearchForm></SearchForm>
            </Grid>
            <Grid item className={classes.searchbtn}>
              <Button variant="contained" color="primary" className={classes.margin}>
                Wyszukaj samochód
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.secondBar} xs={12} md={6}>
          <Typography className={classes.title}>
            Wypożyczalnia samochodów w Częstochowie. Z nami dojedziesz tam, gdzie chcesz.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TitlePart;
