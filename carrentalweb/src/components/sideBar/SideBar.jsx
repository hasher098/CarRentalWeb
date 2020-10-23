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
        onClose={handleClose}
      >
        <StyledMenuItem className={classes.menuItem}>Zarejestruj się</StyledMenuItem>
        <StyledMenuItem className={classes.menuItem}>Logowanie</StyledMenuItem>
        <StyledMenuItem className={classes.menuItem}>O nas</StyledMenuItem>
        <StyledMenuItem className={classes.menuItem}>Kontakt</StyledMenuItem>
        <StyledMenuItem className={classes.menuItem}>Regulamin</StyledMenuItem>
      </StyledMenu>
    </>
  );
};
export default SideBar;
