import {makeStyles} from "@material-ui/core/styles";
import Image from "../../autko.jpg";

const useStyles=makeStyles((theme)=>({
    background:{
        backgroundImage:`url(${Image})`,
        height: `70rem`,
        width:'100%',
        opacity:`0.95`,
        backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
			backgroundSize: "cover"
    },
    bar:{
        backgroundColor:`black`,
        opacity:`0.5`,
        height:`40rem`,
        marginTop:`7rem`
    },
    bgform:{
        backgroundColor:`#990033`,
        height:`25rem`,
        marginTop: `3rem`,
        width:`80%`,
        padding:`1rem`
    },
    searchbtn:{
        backgroundColor:`white`,
        height:`3rem`,
        width:`80%`
    },
    searchcar:{
        color:`yellow`,
        lineHeight:`80px`,
        paddingLeft:"10px"
    },
    title:{
        textAlign:"left",
        color:"white",
        fontSize:"64px",
        textAlign:"right",
    },
    textbox:{
        color:"white",
        width:"65%",
        height:"550px",
        marginLeft:"595px",
        position:"absolute",
    },
    firstPart:{
        
    },
    secondPart:{

    },
    searchBox:{
        marginLeft:`3rem`
    }


}));

export default useStyles;