import React from 'react';
import useStyles from './FootPartStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const Links = ({tytul}) =>{
    const classes = useStyles();

    return(
        <Typography className={classes.info}lg={3}>{tytul}</Typography>
    );
};

export default Links;
