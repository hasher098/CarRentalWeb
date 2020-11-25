import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import DialogActions from '@material-ui/core/DialogActions';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import useStyles from './LoginWindowStyles';
import Container from '@material-ui/core/Container';
import { loginRequest } from '../../api/loginClient';
import { FormControl } from '@material-ui/core';
import Loader from '../loader/Loader';
import { loginAction } from '../../store/actions/loginActions';
import { useDispatch } from 'react-redux';
const LoginWindow = (props) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const { register, errors, handleSubmit } = useForm({
    mode: 'onSubmit',
  });
  const dispatch = useDispatch();
  async function loginUser(data) {
    try {
      setIsLoading(true);
      if (await dispatch(loginAction(data.userName, data.password))) {
      } else {
        console.log('error');
      }
      props.parrentCallback(false);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FormControl onSubmit={handleSubmit(loginUser)}>
      <Grid>
        <Container component="main" maxWidth="xs">
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5" className={classes.text}>
            Zaloguj się
          </Typography>
          <form role="form" noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="userName"
                  defaultValue=""
                  label={'Username'}
                  name="userName"
                  autoComplete="userName"
                  autoFocus
                  inputRef={register({ required: true })}
                />
                {errors.userName && 'Nazwa użytkownika jest wymagana'}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  defaultValue=""
                  inputRef={register({ required: true })}
                  name="password"
                  label={'Password'}
                  type="password"
                  id="password"
                />
                {errors.password && 'Hasło jest wymagane'}
              </Grid>
            </Grid>
            <Loader
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              isLoading={isLoading}
            >
              Zaloguj
            </Loader>
          </form>
        </Container>
      </Grid>
    </FormControl>
  );
};
export default LoginWindow;
