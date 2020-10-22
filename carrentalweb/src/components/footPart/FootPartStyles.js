import {makeStyles} from "@material-ui/core/styles";

const useStyles=makeStyles((theme)=>({
    background:{
        backgroundColor:"#0D0D0D",
        height: `300px`,
        color:'#f2f2f2',
    },
    info:{
        width:"90%",
        height:"100%",
        paddingLeft:"100px",
        paddingTop:"60px",
    },
    socials:{
        width:"10%",
        height:"100%",
        
    },
    icons:{
        fontSize:"100px",
        
        
    },

}));

export default useStyles;