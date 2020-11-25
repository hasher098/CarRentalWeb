import React from 'react';
import useStyles from './AfterRentStyles';
import Grid from '@material-ui/core/Grid';
import Typhography from '@material-ui/core/Typography';
const AfterRent = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typhography variant="h2" className={classes.Typho}>
          Dziekujemy za wynajem samochodu, wszystkie potrzebne informacje zostały wysłane na adres
          e-mail. W razie pytam prosimy o kontakt telefoniczny.
        </Typhography>
      </Grid>
    </Grid>
  );
};

export default AfterRent;
