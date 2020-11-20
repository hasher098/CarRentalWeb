import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formcontainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
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
}));

export default useStyles;
