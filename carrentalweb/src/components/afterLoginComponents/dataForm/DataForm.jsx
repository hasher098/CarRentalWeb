import React from 'react';
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
import { useSelector } from 'react-redux';
const DataForm = () => {
  const classes = useStyles();
  const { register, errors, handleSubmit } = useForm({
    mode: 'onSubmit',
  });
  const userId = useSelector(userIdSelector);
  console.log('pusto tu');
  console.log(userId);
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
      console.log(`${data.firstName}`);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <FormControl onSubmit={handleSubmit(updateData)}>
      <form role="form" noValidate>
        <Grid container spacing={3} className={classes.formcontainer}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="firstName"
              name="firstName"
              label="Imie"
              fullWidth
              autoComplete="given-name"
              inputRef={register}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="lastName"
              name="lastName"
              label="Nazwisko"
              fullWidth
              autoComplete="family-name"
              inputRef={register}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address"
              name="address"
              label="Addres"
              fullWidth
              autoComplete="address"
              inputRef={register}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="idcardnumber"
              name="idcardnumber"
              label="Nr dowodu"
              fullWidth
              inputRef={register}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="pesel" name="pesel" label="Pesel" fullWidth inputRef={register} />
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Update
          </Button>
        </Grid>
      </form>
    </FormControl>
  );
};

export default DataForm;
