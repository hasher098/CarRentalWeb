import React from 'react';
import useStyles from './DescPartStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Title from './Title'
import Description from './Description'
const DescBox = ({tytul,descript}) => {
  const classes = useStyles();

  return (
      <Grid container className={classes.d1}>
          <Title tytul={tytul}></Title>
          <Description descript={descript}></Description>

      </Grid>
  );
};

export default DescBox