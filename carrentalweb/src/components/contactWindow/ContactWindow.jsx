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
import useStyles from './ContactWindowStyles';
import Container from '@material-ui/core/Container';
import { FormControl } from '@material-ui/core';
import Loader from '../loader/Loader';

const ContactWindow = () => {
    const classes = useStyles();
  
    return (
        <FormControl>
        <Grid>
          <Container component="main" maxWidth="xs">
          </Container>
        </Grid>
      </FormControl>
      
  );
  };
  
  export default ContactWindow;