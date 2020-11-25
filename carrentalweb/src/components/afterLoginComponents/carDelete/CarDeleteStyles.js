import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        marginLeft: 'auto',
        marginRight: 'auto',
        bacgroundColor: "red",
    },
    form: {
        marginLeft: "auto",
        marginRight: "auto",
        minWidth:'300px'
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
    autocomp:{
        minWidth:'300px'
    }
}));

export default useStyles;