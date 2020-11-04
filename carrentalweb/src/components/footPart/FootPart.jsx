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
            <Typography variant="h5" className={classes.text}>
                ul. Biegańskiego 23
            </Typography>
            <Typography variant="h5" className={classes.text}>
                42-200 Częstochowa
            </Typography>
        </Grid>
        <Grid item >
            <FacebookIcon className={classes.icons}></FacebookIcon>
            <TwitterIcon className={classes.icons}></TwitterIcon>
            <InstagramIcon className={classes.icons}></InstagramIcon>
            <Typography className={classes.text}>
                Copyright &copy; 2020
            </Typography>
        </Grid>
    </Grid>

);

};

export default FootPart;