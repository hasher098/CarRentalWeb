import {makeStyles} from "@material-ui/core/styles";

const useStyles=makeStyles((theme)=>({
      wrapper:{
        position: 'relative',
      },
      loader:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: '-12px',
        marginLeft: '-12px',
      }
      
}));

export default useStyles;