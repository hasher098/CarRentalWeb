import {makeStyles} from "@material-ui/core/styles";

const useStyles=makeStyles((theme)=>({
    background:{
        backgroundColor:"#F2F2F2",
        height: `1000px`,
        opacity:`0.95`,
    },
    features:{
        height:"100%",
        width:"40%",
        float:"left",
    },
    car:{
        width:"60%",
        height:"100%",
        float:"left",
    },
    imagecar:{
        marginTop:"25%",
        marginLeft:"25%"
    },

}));

export default useStyles;