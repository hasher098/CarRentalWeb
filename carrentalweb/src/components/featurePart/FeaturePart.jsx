import React from 'react';
import useStyles from './FeaturePartStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Car from '../../vectorcar.png';
import Features from '../../features.png';
const FeaturePart = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.background}>
      <Grid item md={6} xs={12} className={classes.features}>
        <img src={Features} className={classes.fimg}></img>
      </Grid>
      <Grid container item className={classes.car} md={6} xs={12}>
        <Grid item className={classes.car}>
          <img src={Car} className={classes.cimg}></img>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FeaturePart;
