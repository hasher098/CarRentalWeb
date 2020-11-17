import React, { useState, useEffect } from 'react';
import useStyles from './ListOfCarsStyles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TextField from '@material-ui/core/TextField';
import TableRow from '@material-ui/core/TableRow';
import { listOfCarsRequest } from '../../../api/carClient';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CarItem from './carItem/CarItem';
import Box from '@material-ui/core/Box';
import Pagination from '@material-ui/lab/Pagination';

const ListOfCars = () => {
  const classes = useStyles();
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCars, setCurrentCars] = useState([]);

  async function fetchCars() {
    const response = await listOfCarsRequest();
    const rows = response.data;
    setCars(rows);
    setCurrentCars(rows.slice(currentPage * 6 - 6, currentPage * 6));
  }

  useEffect(() => {
    fetchCars();
  }, []);

  useEffect(() => {
    setCurrentCars(cars.slice(currentPage * 6 - 6, currentPage * 6));
  }, [currentPage]);

  const handleChangePage = (e, pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <Grid container className={classes.container} justify="center">
      <Grid container className={classes.searchBar} justify="space-between"></Grid>
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
