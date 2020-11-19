import React, { useState, useEffect } from 'react';
import useStyles from './ListOfCarsStyles';
import { listOfCarsRequest } from '../../../api/carClient';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CarItem from './carItem/CarItem';
import Box from '@material-ui/core/Box';
import Pagination from '@material-ui/lab/Pagination';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const ListOfCars = () => {
  const classes = useStyles();
  const [cars, setCars] = useState([]);
  const [allCars, setAllCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCars, setCurrentCars] = useState([]);
  const [carBrands, setCarBrands] = useState([]);
  const [carModels, setCarModels] = useState([]);
  const [queryBrand, setQueryBrand] = useState('');
  const [queryModel, setQueryModel] = useState('');

  const re = RegExp(`.*${queryBrand.toLowerCase().split('').join('.*')}.*`);
  const re2 = RegExp(`.*${queryModel.toLowerCase().split('').join('.*')}.*`);

  async function fetchCars() {
    const response = await listOfCarsRequest();
    const rows = response.data;
    setCars(rows);
    setAllCars(rows);
    setCurrentCars(rows.slice(currentPage * 6 - 6, currentPage * 6));
    const uniqueBrands = [...new Set(rows.map((item) => item.brand))];
    setCarBrands(uniqueBrands);
    const uniqueModels = [...new Set(rows.map((item) => item.model))];
    setCarModels(uniqueModels);
  }

  useEffect(() => {
    fetchCars();
  }, []);

  useEffect(() => {
    if (queryBrand.length == 0) {
      setCurrentCars(allCars.slice(currentPage * 6 - 6, currentPage * 6));
    }
    if (queryModel.length == 0) {
      setCurrentCars(allCars.slice(currentPage * 6 - 6, currentPage * 6));
    }
    if (queryBrand.length > 0) {
      setCurrentCars(cars.slice(currentPage * 6 - 6, currentPage * 6));
    }
    if (queryModel.length > 0) {
      setCurrentCars(cars.slice(currentPage * 6 - 6, currentPage * 6));
    }
  }, [currentPage]);

  useEffect(() => {
    const filteredCars = allCars.filter((x) => x.brand.toLowerCase().match(re));
    let newCars = [];

    if (queryBrand.length > 0) {
      newCars = filteredCars.filter((x) => x.model.toLowerCase().match(re2));
    } else {
      newCars = filteredCars;
    }

    setCars(newCars);
    setCurrentCars(newCars.slice(currentPage * 6 - 6, currentPage * 6));
  }, [queryBrand]);

  useEffect(() => {
    const filteredCars = allCars.filter((x) => x.model.toLowerCase().match(re2));
    let newCars = [];
    if (queryBrand.length > 0) {
      newCars = filteredCars.filter((x) => x.brand.toLowerCase().match(re));
    } else {
      newCars = filteredCars;
    }

    setCars(newCars);
    setCurrentCars(newCars.slice(currentPage * 6 - 6, currentPage * 6));
  }, [queryModel]);

  const handleChangePage = (e, pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const brandProps = {
    options: carBrands,
    getOptionLabel: (option) => option,
  };
  const modelProps = {
    options: carModels,
    getOptionLabel: (option) => option,
  };

  const handleInputChangeBrand = (event) => {
    setQueryBrand(event.target.value);
  };
  const handleInputChangeModel = (event) => {
    setQueryModel(event.target.value);
  };

  return (
    <Grid container className={classes.container} justify="center">
      <Grid container justify="space-evenly">
        <Grid item xs={4}>
          <Autocomplete
            className={classes.searchBar}
            {...brandProps}
            id="auto-complete"
            autoComplete
            includeInputInList
            renderInput={(params) => (
              <TextField
                {...params}
                onChange={handleInputChangeBrand}
                onSubmit={handleInputChangeBrand}
                onBlur={handleInputChangeBrand}
                label="Marka"
                margin="normal"
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Autocomplete
            className={classes.searchBar}
            {...modelProps}
            id="auto-complete"
            autoComplete
            includeInputInList
            renderInput={(params) => (
              <TextField
                {...params}
                onChange={handleInputChangeModel}
                onBlur={handleInputChangeModel}
                onSubmit={handleInputChangeModel}
                label="Model"
                margin="normal"
              />
            )}
          />
        </Grid>
      </Grid>
      {currentCars.map((data, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Box display="flex" justifyContent="space-around" className={classes.card}>
            <CarItem dane={data}></CarItem>
          </Box>
        </Grid>
      ))}
      <Pagination
        onChange={handleChangePage}
        count={Math.ceil(cars.length / 6)}
        style={{ marginTop: '1rem' }}
        color={'secondary'}
      />
    </Grid>
  );
};

export default ListOfCars;
