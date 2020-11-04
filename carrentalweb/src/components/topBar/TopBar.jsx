import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { AppBar, Typography, Box, Grid } from '@material-ui/core';
import useStyles from './TopBarStyles';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import EmailIcon from '@material-ui/icons/Email';
import log from '../../log.png';
import log1 from '../../log1.png';
import SideBar from '../sideBar/SideBar';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const TopBar = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');
  // var pic;
  // if(matches===true){
  //   pic=log;
  // }
  // else{
  //   pic=log1;
  // }
  

  return (
    <AppBar position="relative">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" noWrap className={classes.title}>
          <img src={(matches ? log : log1)}></img>
        </Typography>
        <EmailIcon className={classes.mailIcon}></EmailIcon>
        <Typography className={classes.mailTypho} variant="h6" noWrap>
          KONTAKT
        </Typography>

        <Typography variant="h6" className={classes.menu}>
          <SideBar></SideBar>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
