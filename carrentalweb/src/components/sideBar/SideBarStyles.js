import { makeStyles, useTheme } from '@material-ui/core/styles';
const drawerWidth=240;
const useStyles = makeStyles({
    root: {
        display: 'flex',
      },
      menuButton: {
        marginRight: 36,
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
      menuItem:{
          fontFamily:'Impact',
          fontSize:'24px',
          letterSpacing:'-0.4px',
          wordSpacing:'0.6px',
          fontWeight:'700'
      },
      list: {
        width: 250,
      },
      fullList: {
        width: 'auto',
      },
  });

  export default useStyles;