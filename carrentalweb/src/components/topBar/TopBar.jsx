import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { AppBar, Typography, Box, Grid } from '@material-ui/core';
import useStyles from './TopBarStyles';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import EmailIcon from '@material-ui/icons/Email';

import SideBar from '../sideBar/SideBar';
const TopBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar className={classes.toolbar}>
        <DriveEtaIcon className={classes.driveIcon}></DriveEtaIcon>
        <Typography variant="h6" noWrap className={classes.title}>
          Wypożyczalnia
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
