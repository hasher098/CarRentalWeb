import React from 'react';
import useStyles from './SideBarStyles';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import RegisterWindow from '../registerWindow/RegisterWindow';
import LoginWindow from '../loginWindow/LoginWindows'

const StyledMenu = withStyles({
  paper: {
    width: '240px',
    backgroundColor: 'lightgray',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: 'white',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: 'gray',
      },
    },
  },
}))(MenuItem);

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


  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        onClick={handleClick}
        className={classes.menuIcon}
      >
        MENU
        <MenuIcon />
      </IconButton>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseDialog}
      >
        <StyledMenuItem className={classes.menuItem}>
          <Button onClick={handleClickOpenDialog}>Zarejestruj się</Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <RegisterWindow></RegisterWindow>
            </DialogContent>
            <DialogActions></DialogActions>
          </Dialog>
        </StyledMenuItem>
        <StyledMenuItem className={classes.menuItem}>
          <Button onClick={handleClickOpenDialog1}>Logowanie</Button>
          <Dialog 
             open={open1}
             onClose={handleClose}
             aria-labelledby="alert-dialog-title"
             aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <LoginWindow></LoginWindow>
            </DialogContent>
            <DialogActions></DialogActions>
          </Dialog>
          
        </StyledMenuItem>
        <StyledMenuItem className={classes.menuItem}>O nas</StyledMenuItem>
        <StyledMenuItem className={classes.menuItem}>Kontakt</StyledMenuItem>
        <StyledMenuItem className={classes.menuItem}>Regulamin</StyledMenuItem>
      </StyledMenu>
    </>
  );
};
export default SideBar;
