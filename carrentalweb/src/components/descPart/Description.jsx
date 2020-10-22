import React from 'react';
import useStyles from './DescPartStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
const Description = ({descript}) => {
  const classes = useStyles();

  return(
    <Typography className={classes.desc1}>{descript}</Typography>
  );
};

export default Description;