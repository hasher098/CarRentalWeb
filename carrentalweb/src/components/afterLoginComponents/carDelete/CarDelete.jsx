import React, { useEffect, useState } from 'react';
import useStyles from './CarDeleteStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { listOfCarsRequest } from '../../../api/carClient';
import { carDelete } from '../../../api/carClient';
import { FormControl } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

const CarDelete = () => {
  const classes = useStyles();
  const [status, setStatus] = useState(null);
  const [link, setLink] = useState('cardelete');
  const [idcar, setIdcar] = useState(null);
  const [image, setImage] = useState(null);
  const [open, setOpen] = useState(false);
  ////////////////////////////////////////
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  /////////////////////////////////////////
  const [data, setData] = useState();
  async function fetchData() {
    const response = await listOfCarsRequest();
    setData(response.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  ////////////////////////////////////////
  const { register, errors, handleSubmit } = useForm({
    mode: 'onSubmit',
  });

  async function carDeleteFunc(data) {
    try {
      const response = await carDelete(idcar);
      setStatus('Samochód usunięty pomyślnie');
      setLink('/');
    } catch (error) {
      console.log(error);
      setStatus('Błąd podczas usuwania samochodu');
    }
  }
  return (
    <Grid container item xs={12} md={8} className={classes.container}>
      <Grid item xs={12} md={12} className={classes.form}>
        <FormControl onSubmit={handleSubmit(carDeleteFunc)}>
          <form role="form" noValidate>
            <Grid item className={classes.photobox} xs={12} md={12}>
              <img src={image} className={classes.photo}></img>
            </Grid>
            <Grid item xs={12} md={12} className={classes.autocomp}>
              <Autocomplete
                id="combo-box-demo"
                options={data}
                onChange={(event, newValue) => {
                  if (newValue) {
                    setIdcar(newValue.id);
                    setImage(newValue.image);
                  }
                }}
                getOptionLabel={(option) =>
                  option.brand + ' ' + option.model + ' Pojemność: ' + option.engineCapacity
                }
                style={{ backgroundColor: `white` }}
                renderInput={(params) => (
                  <TextField {...params} label="Wybierz samochód" variant="outlined" />
                )}
              ></Autocomplete>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              Usuń Samochód
            </Button>
            <Dialog
              open={open}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogContent>
                <Typography className={classes.status}>
                  {status}
                  <Link style={{ textDecoration: 'none' }} to={link}>
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
          </form>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default CarDelete;
