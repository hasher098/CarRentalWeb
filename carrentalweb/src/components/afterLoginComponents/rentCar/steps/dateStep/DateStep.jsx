import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux';
import { userIdSelector } from '../../../../../store/selectors/authSelector';
import useStyles from './DateStepStyles';
const DateStep = (props) => {
  const classes = useStyles();
  const userId = useSelector(userIdSelector);
  const [firstDates, setFirstDates] = useState('2020-11-28');
  const [secondDates, setsecondDates] = useState('2020-11-30');

  const values = {
    someDate: '2020-11-28',
    someDate2: '2020-11-30',
  };

  function firstDateClick(event) {
    setFirstDates(event.target.value);
  }
  function SecondDateClick(event) {
    setsecondDates(event.target.value);
  }

  useEffect(() => {
    props.giveDates1(firstDates);
  }, [firstDates]);
  useEffect(() => {
    props.giveDates2(secondDates);
  }, [secondDates]);

  return (
    <form className={classes.container} noValidate>
      <Grid container>
        <Grid item xs={6} md={6}>
          <TextField
            id="date"
            label="Data odbioru"
            type="date"
            className={classes.firstDate}
            defaultValue={values.someDate}
            onChange={firstDateClick}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            id="date"
            label="Data zwrotu"
            type="date"
            className={classes.secondDate}
            defaultValue={values.someDate2}
            onChange={SecondDateClick}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default DateStep;
