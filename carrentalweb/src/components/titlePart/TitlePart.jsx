import React from 'react';
import useStyles from './TitlePartStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
const TitlePart = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.background}>
      <Grid item className={classes.bar}>
        <Grid container className={classes.textbox}>
          <Typography className={classes.title}>Wypożyczalnia samochodów<br/>w Częstochowie. <br/> Z nami dojedziesz tam,<br/> gdzie chcesz.</Typography>
        </Grid>
        <Grid item className={classes.bgform}></Grid>
        <Grid item className={classes.searchbtn}>
          <Typography variant="h4" className={classes.searchcar}>Wyszukaj samochód</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TitlePart;
