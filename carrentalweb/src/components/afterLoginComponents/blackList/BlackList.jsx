import React, { useEffect, useState } from 'react';
import useStyles from './BlackListStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import { listOfCarsRequest } from '../../../api/carClient';
import createPalette from '@material-ui/core/styles/createPalette';
const BlackList = () => {
  const classes = useStyles();

  const [data, setData] = useState();
  async function fetchData() {
    const response = await listOfCarsRequest();
    setData(response.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'brand', headerName: 'Brand', width: 130 },
    { field: 'model', headerName: 'model', width: 130 },
  ];
  const [rows, setRows] = useState(null);
  return (
    <Grid container item xs={12} md={8} className={classes.container}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </Grid>
  );
};

export default BlackList;
