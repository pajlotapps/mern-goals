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

function createData(id, created, title, desc, author, status, update) {
  return { id, created, title, desc, author, status, update};
}

const rows = [
  createData(
    0,
    '16 Mar, 2019 | 11:21',
    'First task',
    'First task desc',
    'John Doe',
    'In-progress',
    '16 Kwietnia, 2019 | 12:12',
  ),
  createData(
    0,
    '16 Mar, 2019 | 11:21',
    'First task',
    'First task desc',
    'John Doe',
    'In-progress',
    '16 Kwietnia, 2019 | 12:12',
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function TasksList() {

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Title >Lista wszystkich zadań</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Tytuł</TableCell>
            <TableCell>Opis</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Odpowiedzialny</TableCell>
            <TableCell>Utworzono</TableCell>

            <TableCell align="right">Modyfikowano</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.desc}</TableCell>
              <TableCell>{`${row.status}`}</TableCell>
              <TableCell>{row.author}</TableCell>
              <TableCell>{row.created}</TableCell>
              <TableCell align="right">{row.update}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Link
        color="primary"
        cursor="pointer"
        href='/tasks'
        sx={{ mt: 3 }}
      >
        Pokaż wszystkie zadania
      </Link>

    </React.Fragment>
  );
}