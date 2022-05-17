import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import {useEffect,useState} from 'react';
import axiosInstance from './axios1';
import {Link} from 'react-router-dom';

// function createData(
//   name,
//   calories,
//   fat,
//   carbs,
//   protein
// ) {
//   return { name, calories, fat, carbs, protein };
// }



// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function DenseTable() {
   
    const [listItems,setListItems] = useState([])

    const [loading,setLoading] = useState(true) 
    function fetchData()
    {
        axiosInstance.get('v1/posts/')
        .then((response) =>
        {
        const datum = response.data
        console.log(datum)
         setListItems(datum)
        } 
        )
        .catch(
            (e) => console.log(e)
        )
        .finally(
            () => setLoading(false)
            )

    }
    
  useEffect(fetchData,[])

  return (<Container>
    <TableContainer component={Paper}>
      {loading && <h1>loading ..... </h1>}  
      <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>id </TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">description</TableCell>
            <TableCell align="right">actions</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {listItems.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

              <TableCell component="th" scope="row">
                <Link to={'/detail/'+row.id}>{row.id}</Link>
              </TableCell> 
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">delete/update</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
