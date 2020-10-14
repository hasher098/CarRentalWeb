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
}));

export default useStyles;