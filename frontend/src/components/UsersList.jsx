import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

import { useNavigate } from "react-router-dom";


// Generate Order Data

function createData(id, created, name, login, klucz, status, update) {
  return { id, created, name, login, klucz, status, update};
}

const rows = [
  createData(
    0,
    '16 Mar, 2019 | 11:21',
    'John Doe',
    'j@doe.com',
    'I klucz',
    'Potwierdzony',
    '26 Kwietnia, 2019 | 15:42',
  ),
  createData(
    0,
    '19 Lip, 2021 | 01:41',
    'Piter Parker',
    'p@parker.pl',
    'II klucz',
    'Oczekuje',
    '11 Sierpnia, 2021 | 12:12',
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function UsersList() {

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Title align="right">Lista wszystkich użytkowników</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nazwa</TableCell>
            <TableCell>Login</TableCell>
            <TableCell>Klucz</TableCell>
            <TableCell>Utworzono</TableCell>
            <TableCell>Modyfikowano</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.login}</TableCell>
              <TableCell>{row.klucz}</TableCell>
              <TableCell>{row.created}</TableCell>
              <TableCell>{row.update}</TableCell>
              <TableCell>{`${row.status}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </React.Fragment>
  );
}