import {makeStyles} from "@material-ui/core/styles";
import Image from "../../autko.jpg";

const useStyles=makeStyles((theme)=>({
    background:{
        backgroundImage:`url(${Image})`,
        height: "auto",
        
        opacity:`0.95`,
        backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
			backgroundSize: "cover"
    },
    bar:{
        backgroundColor: `rgba(0,0,0,0.5)`,
        height:"auto",
        marginTop:`7rem`,
        marginBottom:"7rem",
        '@media (min-width:1080px)': {
            minHeight:"680px",
        },
    },
    title:{
        color:"white",
        fontSize: '24px',
        textAlign:"center",
        
        opacity:'1',
        '@media (min-width:600px)': {
          fontSize: '40px',
          textAlign:"center",
        },
        '@media (min-width:1080px)': {
          fontSize: '72px',
          textAlign:"right",
          padding:"30px",
        },
        
        
    },
    form:{
    
    },
    bgform:{
        backgroundColor:`#811A0B`,
        margin:"auto",
        padding:`1rem`
    },
    searchbtn:{
        backgroundColor:`white`,
        padding:"5px",
        marginLeft:"auto",
        marginRight:"auto",
    },
    searchcar:{
        color:`yellow`,
        lineHeight:`80px`,
        paddingLeft:"10px"
    },
    searchBox:{
        backgroundColor:"yellow",
        margin:"auto"
    },


}));

export default useStyles;