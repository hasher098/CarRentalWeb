import React from 'react';
import useStyles from './TitlePartStyles';
import Grid from '@material-ui/core/Grid';
const TitlePart = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.background}>
      <Grid item className={classes.bar}></Grid>
    </Grid>
  );
};

export default TitlePart;
