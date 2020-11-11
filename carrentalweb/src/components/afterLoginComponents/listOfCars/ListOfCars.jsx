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
import Autocomplete from '@material-ui/lab/Autocomplete';
const columns = [
  { id: 'brand', label: 'Brand', minWidth: 120 },
  { id: 'model', label: 'Model', minWidth: 100 },
  {
    id: 'year',
    label: 'Year',
    minWidth: 120,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'color',
    label: 'Color',
    minWidth: 120,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'engineCapacity',
    label: 'EngineCapacity',
    minWidth: 120,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'seats',
    label: 'Seats',
    minWidth: 120,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'gearbox',
    label: 'Gearbox',
    minWidth: 120,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];
const ListOfCars = () => {
  const classes = useStyles();
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  async function fetchCars() {
    const response = await listOfCarsRequest();

    const rows = response.data.map((x) => {
      const score = createData(
        x.brand,
        x.model,
        x.year,
        x.color,
        x.engineCapacity,
        x.seats,
        x.gearbox,
      );
      return score;
    });
    setCars(rows);
  }

  useEffect(() => {
    fetchCars();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function createData(brand, model, year, color, engineCapacity, seats, gearbox) {
    return { brand, model, year, color, engineCapacity, seats, gearbox };
  }
  function wyswietl() {
    console.log(cars);
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {cars.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={cars.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ListOfCars;
