import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Home = () => {
    const rows=[{
        Empid:1034,
        Name:"Aswathy",
        Dept:"Electronics",
        Location:"tvm"
    },
    {
        Empid:1036,
        Name:"Akhila",
        Dept:"Mechanics",
        Location:"tvm "
    },
    {
        Empid:1037,
        Name:"Akshay",
        Dept:"Electrical",
        Location:"tvm" 
    }
]
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Empid</TableCell>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">Dept&nbsp;(g)</TableCell>
          <TableCell align="right">Location&nbsp;(g)</TableCell>
        
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.Empid}
            </TableCell>
            <TableCell align="right">{row.Name}</TableCell>
            <TableCell align="right">{row.Dept}</TableCell>
            <TableCell align="right">{row.Location}</TableCell>
        
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Home