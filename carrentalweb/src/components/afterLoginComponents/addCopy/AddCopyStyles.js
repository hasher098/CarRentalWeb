import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "30px",

    },
    formcontainer: {
        display: 'block',
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "30px",
        width: "100%",
    },
    auto: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
    },
    photo: {
        maxWidth: '100%',
        height: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
    },
    photobox: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '400px',
    },
    status: {
        fontSize: '24px',
        textAlign: 'center',
    },
    button: {
        marginTop: "20px",
    }
}));

export default useStyles;