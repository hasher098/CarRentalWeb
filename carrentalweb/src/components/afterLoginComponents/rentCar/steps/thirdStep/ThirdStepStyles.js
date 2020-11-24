import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        minWidth: 340,
        //margin:"30px",
      },
      container:{
        maxWidth:'200px',
        backgroundColor:"red",
      },
      media: {
        height: 140,
      },
      carinfo:{
        fontSize:"24px",
      },
      ico:{
         marginTop: "2px",
      },
      action:{
        backgroundColor:"#811A0B",
      },
      bt:{
        backgroundColor:"#D0D0D0",
        '&:hover': {
          backgroundColor:"#811A0B",
          color:"white",
        },
      },
      bt:{
        backgroundColor:"#D0D0D0",
        '&:hover': {
          backgroundColor:"#811A0B",
          color:"white",
        },
      },
  });

  export default useStyles;