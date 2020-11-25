import React, { useEffect, useState } from 'react';
import useStyles from './RentListStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { listOfRents } from '../../../api/rentClient';
import { userDetails } from '../../../api/userClient';
import { copyDetails } from '../../../api/carClient';
import Paper from '@material-ui/core/Paper';
const BanUser = () => {
  const classes = useStyles();
  const [rents, setRents] = useState([]);
  const [userData, setUserData] = useState([]);
  const [copyData, setCopyData] = useState();
  async function getRentsList() {
    const response = await listOfRents();
    setRents(response.data);
  }

  //////////////////////
  async function userDet(userId) {
    const response1 = await userDetails(userId);
    setUserData(response1.data);
  }
  async function carDet(carId) {
    const response2 = await copyDetails(carId);
    setCopyData(response2.data);
  }
  /////////////////////
  useEffect(() => {
    getRentsList();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right" className={classes.naglowek}>
              Id
            </TableCell>
            <TableCell align="right" className={classes.naglowek}>
              Id użytkownika
            </TableCell>
            <TableCell align="right" className={classes.naglowek}>
              Id CarCopy
            </TableCell>
            <TableCell align="right" className={classes.naglowek}>
              Data wypożyczenia
            </TableCell>
            <TableCell align="right" className={classes.naglowek}>
              Data zwrotu
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rents.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="right" className={classes.dane}>
                {row.id}
              </TableCell>
              <TableCell align="right" className={classes.dane}>
                {row.userID}
              </TableCell>
              <TableCell align="right" className={classes.dane}>
                {row.carCopyId}
              </TableCell>
              <TableCell align="right" className={classes.dane}>
                {row.rentDate}
              </TableCell>
              <TableCell align="right" className={classes.dane}>
                {row.returnDate}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BanUser;
