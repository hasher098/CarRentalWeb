import React from 'react';
import useStyles from './DescPartStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DescBox from './DescBox';

const DescPart = () => {
  const classes = useStyles();

  return (
      <Grid container className={classes.background}>
        <DescBox tytul="O nas" descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget rutrum metus. Duis blandit lorem ac est fringilla, nec congue nibh hendrerit. Pellentesque arcu tellus, ornare sollicitudin commodo vel, convallis ut ex."></DescBox>
        <DescBox tytul="Dlaczego my?" descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget rutrum metus. Duis blandit lorem ac est fringilla, nec congue nibh hendrerit. Pellentesque arcu tellus, ornare sollicitudin commodo vel, convallis ut ex."></DescBox>
        <DescBox tytul="Nasze Pojazdy" descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget rutrum metus. Duis blandit lorem ac est fringilla, nec congue nibh hendrerit. Pellentesque arcu tellus, ornare sollicitudin commodo vel, convallis ut ex."></DescBox>
        <DescBox tytul="Pakiety Premium" descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget rutrum metus. Duis blandit lorem ac est fringilla, nec congue nibh hendrerit. Pellentesque arcu tellus, ornare sollicitudin commodo vel, convallis ut ex."></DescBox>
        <DescBox tytul="Siedziba" descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget rutrum metus. Duis blandit lorem ac est fringilla, nec congue nibh hendrerit. Pellentesque arcu tellus, ornare sollicitudin commodo vel, convallis ut ex."></DescBox>
        <DescBox tytul="Ceny" descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget rutrum metus. Duis blandit lorem ac est fringilla, nec congue nibh hendrerit. Pellentesque arcu tellus, ornare sollicitudin commodo vel, convallis ut ex."></DescBox>
        <DescBox tytul="Regulamin" descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget rutrum metus. Duis blandit lorem ac est fringilla, nec congue nibh hendrerit. Pellentesque arcu tellus, ornare sollicitudin commodo vel, convallis ut ex."></DescBox>
        <DescBox tytul="Opinie" descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget rutrum metus. Duis blandit lorem ac est fringilla, nec congue nibh hendrerit. Pellentesque arcu tellus, ornare sollicitudin commodo vel, convallis ut ex."></DescBox>
      </Grid>
    
);
};

export default DescPart;