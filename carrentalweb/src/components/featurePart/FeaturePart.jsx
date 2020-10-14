import React from 'react';
import useStyles from './FeaturePartStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Car from '../../vectorcar.png';
const FeaturePart = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.background}>
      <Grid container className={classes.features}></Grid>
      <Grid container className={classes.car}>
        <Grid item className={classes.imagecar}>
          <img src={Car} alt="Car" />
        </Grid>
      </Grid>
 
      
    </Grid>
  );
};

export default FeaturePart;
