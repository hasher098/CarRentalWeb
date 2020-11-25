import React, { useEffect, useState } from 'react';
import useStyles from './ListUsersStyles';
import { listOfUsers } from '../../../api/userClient';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const BanUser = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  async function getUserList() {
    const response = await listOfUsers();
    setUsers(response.data);
  }

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right" className={classes.naglowek}>
              Imie
            </TableCell>
            <TableCell align="right" className={classes.naglowek}>
              Nazwisko
            </TableCell>
            <TableCell align="right" className={classes.naglowek}>
              Adres
            </TableCell>
            <TableCell align="right" className={classes.naglowek}>
              Email
            </TableCell>
            <TableCell align="right" className={classes.naglowek}>
              Pesel
            </TableCell>
            <TableCell align="right" className={classes.naglowek}>
              Nr dowodu
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.pesel}</TableCell>
              <TableCell align="right">{row.iDcardNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BanUser;
