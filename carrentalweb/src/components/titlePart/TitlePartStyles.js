import {makeStyles} from "@material-ui/core/styles";
import Image from "../../autko.jpg";

const useStyles=makeStyles((theme)=>({
    background:{
        backgroundImage:`url(${Image})`,
        height: `1000px`,
        opacity:`0.95`,
        backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
			backgroundSize: "cover"
    },
    bar:{
        backgroundColor:`black`,
        opacity:`0.5`,
        height:`630px`,
        width:`100%`,
        marginTop:`7em`,
    },
    bgform:{
        backgroundColor:`blue`,
        height:`400px`,
        width:`550px`,
        marginLeft: `40px`,
        marginTop: `40px`,
    },
    searchbtn:{
        backgroundColor:`white`,
        width:`550px`,
        height:`55px`,
        marginLeft:`40px`,
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
        marginLeft:"350px",
        marginTop:"40px",
    },
    textbox:{
        color:"white",
        width:"65%",
        height:"550px",
        marginLeft:"595px",
        position:"absolute",
    },


}));

export default useStyles;