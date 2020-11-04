import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import useStyles from './SideBarStyles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import RegisterWindow from '../registerWindow/RegisterWindow';
import LoginWindow from '../loginWindow/LoginWindows';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

const SideBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpen(true);
    handleClose();
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleClickOpenDialog1 = () => {
    setOpen1(true);
    handleClose();
  };

  const handleCloseDialog1 = () => {
    setOpen1(false);
  };

  const closeRegister = (something) => {
    setOpen(something);
  };
  const closeLogin = (something) => {
    setOpen1(something);
  };

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift' || event.Key === 'Esc')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <List>
        <ListItem className={classes.MenuItem}>
          <VpnKeyIcon></VpnKeyIcon>
          <Button onClick={handleClickOpenDialog}>Zarejestruj się</Button>
          <Dialog
            open={open}
            onClose={handleCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <RegisterWindow parrentCallback={closeRegister}></RegisterWindow>
            </DialogContent>
            <DialogActions></DialogActions>
          </Dialog>
        </ListItem>
        <ListItem className={classes.menuItem}>
          <LockOpenIcon></LockOpenIcon>
          <Button onClick={handleClickOpenDialog1}>Logowanie</Button>
          <Dialog open={open1} onClose={handleCloseDialog1}>
            <DialogContent>
              <LoginWindow parrentCallback={closeLogin}></LoginWindow>
            </DialogContent>
            <DialogActions></DialogActions>
          </Dialog>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className={classes.menu}>
            <MenuIcon></MenuIcon>
            <Typography variant="h6"> MENU</Typography>
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SideBar;
