import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
    toolbar:{
        backgroundColor:`#0d0d0d`,
    },
    title:{
        flexGrow:2,
    },
    driveIcon: {
        marginRight: theme.spacing(1),
        
      },
      mailIcon: {
        marginRight: theme.spacing(1),
      },
    menuIcon:{
        marginLeft:theme.spacing(1),
    },
}));

export default useStyles;