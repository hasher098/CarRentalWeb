import React from 'react';
import useStyles from './FootPartStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const FootPart = () =>{
const classes = useStyles();
return(
    <Grid container className={classes.background}>
        <Grid item className={classes.info}>
            <Typography variant="h5">O nas</Typography>
            <Typography variant="h5">Kontakt</Typography>
            <Typography variant="h5">Regulamin</Typography>
            <Typography variant="h5">Siedziba</Typography>
            <Typography variant="h5">Opinie</Typography>
            <Typography variant="h5">Cennik</Typography>
        </Grid>
        
    </Grid>

);

};

export default FootPart;