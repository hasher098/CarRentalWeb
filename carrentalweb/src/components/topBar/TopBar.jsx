import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { AppBar, Typography, Box, Grid } from '@material-ui/core';
import useStyles from './TopBarStyles';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import log from '../../log.png';
import log1 from '../../log1.png';
import SideBar from '../sideBar/SideBar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ContactWindow from '../contactWindow/ContactWindow';
import EmailIcon from '@material-ui/icons/Email';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector } from 'react-redux';
import { userNameSelector, userRole } from '../../store/selectors/authSelector';

const TopBar = () => {
  const isName = useSelector(userNameSelector);
  const role = useSelector(userRole);
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickOpenDialog = () => {
    setOpen(true);
    handleClose();
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  return (
    <AppBar position="relative">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" noWrap className={classes.title}>
          <img src={matches ? log : log1}></img>
        </Typography>
        {matches?
        isName && <Typography>Zalogowany jako: {isName}</Typography>:<></>}
        <Typography className={classes.mailTypho} variant="h6" noWrap>
          <Button onClick={handleClickOpenDialog} className={classes.but}>
            <EmailIcon className={classes.mailIcon}></EmailIcon>
            {matches ? <Typography variant="h6">Kontakt</Typography> : <></>}
          </Button>
          <Dialog
            open={open}
            onClose={handleCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <ContactWindow></ContactWindow>
            </DialogContent>
            <DialogActions></DialogActions>
          </Dialog>
        </Typography>
        <Typography variant="h6" className={classes.menu}>
          <SideBar></SideBar>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
