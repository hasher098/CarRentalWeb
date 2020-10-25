import React from 'react';
import useStyles from './FootPartStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from '@material-ui/core/Link'
import Links from './Links';

const FootPart = () =>{
const classes = useStyles();
return(
    <Grid container className={classes.background} direction="column" alignItems="center">
        <Grid item>
            <Links tytul="O nas"></Links>
            <Links tytul="Regulamin"></Links>
            <Links tytul="Cennik"></Links>
            <Links tytul="Opinie"></Links>
        </Grid>
        <Grid item >
            <FacebookIcon className={classes.icons}></FacebookIcon>
            <TwitterIcon className={classes.icons}></TwitterIcon>
            <InstagramIcon className={classes.icons}></InstagramIcon>
        </Grid>
    </Grid>

);

};

export default FootPart;