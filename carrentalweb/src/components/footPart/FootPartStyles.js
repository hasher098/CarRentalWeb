import {makeStyles} from "@material-ui/core/styles";

const useStyles=makeStyles((theme)=>({
    background:{
        backgroundColor:"#0D0D0D",
        height: `300px`,
        color:'#f2f2f2',
    },
    info:{
        width:"400px",
        height:"100%",
        paddingLeft:"100px",
        paddingTop:"60px",
    }

}));

export default useStyles;