import React from 'react';
import useStyles from './DescPartStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
const DescPart = () => {
  const classes = useStyles();

  return (
      <Grid container className={classes.background}>
        <Typography variant="h1" >Lorem Ipsum</Typography>
      </Grid>
    
);
};

export default DescPart;