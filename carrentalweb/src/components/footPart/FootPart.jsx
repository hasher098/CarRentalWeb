import React from 'react';
import useStyles from './FootPartStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from '@material-ui/core/Link'

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
        <Grid item className={classes.socials}>
            <Link href="https://facebook.com" color="inherit"><FacebookIcon className={classes.icons}></FacebookIcon></Link>
            <Link href="https://instagram.com" color="inherit"><InstagramIcon className={classes.icons}></InstagramIcon></Link>
            <Link href="https://twitter.com" color="inherit"><TwitterIcon className={classes.icons}></TwitterIcon></Link>
        </Grid>
        
    </Grid>

);

};

export default FootPart;