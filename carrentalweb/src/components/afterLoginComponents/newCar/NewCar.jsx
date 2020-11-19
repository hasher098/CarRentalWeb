import React from 'react';
import useStyles from './NewCarStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FormControl } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import { newCar } from '../../../api/carClient';
import { RadioGroup } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Skeleton from '@material-ui/lab/Skeleton';
const NewCar = () => {
  const classes = useStyles();
  const { register, errors, handleSubmit } = useForm({
    mode: 'onSubmit',
  });
  async function addNewCar(data) {
    try {
      const response = await newCar(
        data.clasa,
        data.brand,
        data.model,
        parseInt(data.year),
        data.color,
        data.engineCapacity,
        parseInt(data.seats),
        data.gearbox,
        data.trunkCapacity,
        roof,
        data.bodyType,
        data.image,
      );
      console.log(`${data.color}`);
    } catch (error) {
      console.log(error);
    }
  }
  const [roof, setRoofRack] = React.useState(false);
  const [photo, setPhoto] = React.useState(null);
  const [imag, setImag] = React.useState(null);

  const handleChange = (event) => {
    setRoofRack(event.target.checked);
  };

  const handleChange1 = () => {
    // setPhoto(register.image);
    console.log();
  };

  console.log(roof);
  console.log(imag);
  return (
    <FormControl onSubmit={handleSubmit(addNewCar)}>
      <form role="form" noValidate>
        <Grid container spacing={3} className={classes.formcontainer} md={6}>
          <Grid item className={classes.photobox} xs={12} md={12} lg={12}>
            {imag ? (
              <img src={imag} className={classes.photo} xs={12} md={12} lg={12} />
            ) : (
              <Skeleton
                className={classes.photo}
                variant="rect"
                width="400px"
                height="310px"
                xs={12}
                md={12}
                lg={12}
              />
            )}
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              id="clasa"
              name="clasa"
              label="Klasa"
              fullWidth
              autoComplete="classa"
              inputRef={register}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="brand"
              name="brand"
              label="Marka"
              fullWidth
              autoComplete="brand"
              inputRef={register}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            {' '}
            <TextField
              id="model"
              name="model"
              label="Model"
              fullWidth
              autoComplete="model"
              inputRef={register}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField id="year" name="year" label="Rok produkcji" fullWidth inputRef={register} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField id="color" name="color" label="Kolor" fullWidth inputRef={register} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="engineCapacity"
              name="engineCapacity"
              label="Pojemność silnika"
              fullWidth
              inputRef={register}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="seats"
              name="seats"
              label="Ilość siedzeń"
              fullWidth
              inputRef={register}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="gearbox"
              name="gearbox"
              label="Skrzynia biegów"
              fullWidth
              inputRef={register}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="trunkCapacity"
              name="trunkCapacity"
              label="Pojemność bagażnika"
              fullWidth
              inputRef={register}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              id="bodyType"
              name="bodyType"
              label="Nadwozie"
              fullWidth
              inputRef={register}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="image"
              name="image"
              label="Link do zdjęcia"
              fullWidth
              inputRef={register}
              onChange={handleChange1}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Checkbox checked={roof.roof} onChange={handleChange} name="roof" color="primary" />
              }
              label="Bagażnik dachowy"
            />
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Dodaj samochód
          </Button>
        </Grid>
      </form>
    </FormControl>
  );
};

export default NewCar;
