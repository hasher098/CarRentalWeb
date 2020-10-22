import {makeStyles} from "@material-ui/core/styles";

const useStyles=makeStyles((theme)=>({
    background:{
        backgroundColor:"#D0D0D0",
        height: `1000px`,
    },
    d1:{
       
        width:"25%",
        height:"50%",
    },
    t1:{
        
        fontSize:"32px", 
        textAlign:"center",
        display:"block",
        width:"100%",
        height:"20%",
        fontStyle:"italic"
    },
    desc1:{
        
        width:"60%",
        marginLeft:"auto",
        marginRight:"auto",
        height:"80%",
        textAlign:"center",
        fontSize:"24px",
    }
    
}));

export default useStyles;