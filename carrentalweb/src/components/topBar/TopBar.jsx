import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { AppBar, Typography, Box, Grid } from '@material-ui/core';
import useStyles from './TopBarStyles';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import EmailIcon from '@material-ui/icons/Email';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

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
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
          MENU
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
