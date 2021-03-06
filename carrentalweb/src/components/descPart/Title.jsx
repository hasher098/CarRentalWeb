import React from 'react';
import useStyles from './DescPartStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Line from '../../line.png';
const Title = ({ tytul }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.t1}>
      {tytul}
      <br />
      <img src={Line} alt="Line" />
    </Grid>
  );
};

export default Title;
