import {makeStyles} from "@material-ui/core/styles";

const useStyles=makeStyles((theme)=>({
    background:{
        backgroundColor:"#F2F2F2",
        height: `1000px`,
        opacity:`0.95`,
    },
    features:{
        height:"100%",
        width:"50%",
        float:"left",
        paddingLeft:"140px",
    },
    fimg:{
        maxwidth:"100%",
        height:"auto",
    },
    car:{
        width:"50%",
        height:"100%",
        float:"left",
    },
    imagecar:{
        marginTop:"25%",
        marginLeft:"25%"
    },

}));

export default useStyles;