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
const LoginWindow = (props) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const { register, errors, handleSubmit } = useForm({
    mode: 'onSubmit',
  });

  async function loginUser(data) {
    try {
      setIsLoading(true);
      const response = await loginRequest(data.userName, data.password);

      props.parrentCallback(false);
      setIsLoading(false);
    } catch (error) {}
  }

  return (
    <FormControl onSubmit={handleSubmit(loginUser)}>
      <Grid>
        <Container component="main" maxWidth="xs">
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5" className={classes.text}>
            SignIn
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
                  inputRef={register}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  defaultValue=""
                  inputRef={register}
                  name="password"
                  label={'Password'}
                  type="password"
                  id="password"
                />
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
              Sign In
            </Loader>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Grid>
    </FormControl>
  );
};
export default LoginWindow;
