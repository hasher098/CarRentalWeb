import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './DataFormStyles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import { FormControl } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { updateProfileData } from '../../../api/updateProfileClient';
import Button from '@material-ui/core/Button';
import { userIdSelector } from '../../../store/selectors/authSelector';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DialogContent from '@material-ui/core/DialogContent';
import { userDetails } from '../../../api/userClient';
import { useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
const DataForm = () => {
  const classes = useStyles();
  const userId = useSelector(userIdSelector);

  const [userData, setUserData] = useState('Brak');
  ////////////////////////////////////////
  const [link, setLink] = useState('');
  const [status, setStatus] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [open, setOpen] = useState(false);

  async function userDet(userId) {
    const response = await userDetails(userId);
    setUserData(response.data);
    form.reset({
      firstName: response.data.firstName,
      lastName: response.data.lastName,
      address: response.data.address,
      idcardnumber: response.data.iDcardNumber,
      pesel: response.data.pesel,
    });
  }
  useEffect(() => {
    userDet(userId);
  }, []);

  const form = useForm({
    mode: 'onSubmit',
  });

  async function updateData(data) {
    try {
      const response = await updateProfileData(
        userId,
        data.firstName,
        data.lastName,
        data.address,
        data.idcardnumber,
        data.pesel,
      );
      setStatus('Dane zaktualizowane pomyślnie');
    } catch (error) {
      setStatus('Błąd podczas aktualizacji danych');
    }
  }

  return (
    <FormControl onSubmit={form.handleSubmit(updateData)}>
      <form role="form" noValidate>
        <Grid container spacing={3} className={classes.formcontainer}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="firstName"
              name="firstName"
              helperText="Imie"
              fullWidth
              autoComplete="given-name"
              inputRef={form.register}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="lastName"
              name="lastName"
              helperText="Nazwisko"
              fullWidth
              autoComplete="family-name"
              inputRef={form.register}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address"
              name="address"
              helperText="Adres"
              fullWidth
              autoComplete="address"
              inputRef={form.register}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="idcardnumber"
              name="idcardnumber"
              helperText="Nr dowodu"
              fullWidth
              inputRef={form.register}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="pesel"
              name="pesel"
              helperText="Pesel"
              fullWidth
              inputRef={form.register}
            />
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" onClick={handleClick}>
            ZATWIERDŹ
          </Button>
          <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <Typography className={classes.status}>
                {status}
                <Link style={{ textDecoration: 'none' }}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleClose}
                  >
                    Powrót
                  </Button>
                </Link>
              </Typography>
            </DialogContent>
            <DialogActions></DialogActions>
          </Dialog>
        </Grid>
      </form>
    </FormControl>
  );
};

export default DataForm;
