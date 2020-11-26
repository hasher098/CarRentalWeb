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
import useStyles from './RegisterWindowStyles';
import Container from '@material-ui/core/Container';
import { registerRequest } from '../../api/registerClient';
import { FormControl } from '@material-ui/core';
import Loader from '../loader/Loader';
import { IsoOutlined } from '@material-ui/icons';
const RegisterWindow = (props) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const { register, errors, handleSubmit } = useForm({
    mode: 'onSubmit',
  });
  async function registerUser(data) {
    try {
      setIsLoading(true);
      const response = await registerRequest(data.userName, data.email, data.password);

      props.parrentCallback(false);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FormControl onSubmit={handleSubmit(registerUser)}>
      <Grid>
        <Container component="main" maxWidth="xs">
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5" className={classes.text}>
            Zarajestruj się
          </Typography>
          <form role="form" noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  defaultValue=""
                  label={'Email'}
                  name="email"
                  autoComplete="email"
                  autoFocus
                  inputRef={register({
                    MinLength: 3,
                    required: true,
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                      message: 'Adres email nieprawidłowy!',
                    },
                  })}
                />
                {errors.email && errors.email.message}
              </Grid>
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
                  inputRef={register({
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                      message: 'Hasło musi mieć min 8 znaków w tym znak specjalny',
                    },
                  })}
                  name="password"
                  label={'Password'}
                  type="password"
                  id="password"
                />
                {errors.password && errors.password.message}
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
              Zarejestruj
            </Loader>
          </form>
        </Container>
      </Grid>
    </FormControl>
  );
};
export default RegisterWindow;
