import {makeStyles} from "@material-ui/core/styles";

const useStyles=makeStyles((theme)=>({
    background:{
        backgroundColor:"#0D0D0D",
        color:'#f2f2f2',
    },
    info:{
        fontSize:"24px",
        textAlign:"center",
    },
    icons:{
        fontSize:"40px",
        padding:"20px",
        
    },
    text:{
        textAlign:"center",
    }
}));

export default useStyles;