import React, { useEffect, useState } from 'react';
import useStyles from './AddCopyStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Skeleton from '@material-ui/lab/Skeleton';
import { listOfCarsRequest } from '../../../api/carClient';
import { newCopy } from '../../../api/carClient';
import { FormControl } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

const AddCopy = () => {
  const classes = useStyles();
  const [status, setStatus] = useState(null);
  const [link, setLink] = useState('addcopy');
  const [idcar, setIdcar] = useState(null);
  const [image, setImage] = useState(null);
  ////////////////////////////////////////
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [open, setOpen] = useState(false);
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
  async function addNewCopy(data) {
    try {
      const response = await newCopy(data.registationNumber, idcar, false);
      setStatus('Egzemplarz dodany pomyślnie');
      setLink('/');
    } catch (error) {
      console.log(error);
      setStatus('Błąd podczas dodawania egzemplarzu');
    }
  }

  return (
    <Grid container item xs={12} md={6} className={classes.container}>
      <Grid item className={classes.photobox} xs={12} md={12} lg={12}>
        {image ? (
          <img src={image} className={classes.photo} xs={12} md={12} lg={12} />
        ) : (
          <Skeleton
            className={classes.photo}
            variant="rect"
            maxWidth="400px"
            height="310px"
            xs={12}
            md={12}
            lg={12}
          />
        )}
      </Grid>
      <Grid item className={classes.formcontainer} xs={12} md={6}>
        <FormControl onSubmit={handleSubmit(addNewCopy)}>
          <form role="form" noValidate>
            <Grid item xs={12} md={12}>
              <Autocomplete
                id="combo-box-demo"
                options={data}
                onChange={(event, newValue) => {
                  setIdcar(newValue.id);
                  setImage(newValue.image);
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
            <Grid item xs={12} md={12}>
              <TextField
                id="registationNumber"
                name="registationNumber"
                label="Numer rejestracyjny"
                fullWidth
                autoComplete="registationNumber"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                Dodaj egzemplarz
              </Button>
            </Grid>
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

export default AddCopy;
