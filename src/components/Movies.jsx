import React from 'react'
import { Typography, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, createTheme, ThemeProvider, } from '@mui/material'
import React, { useEffect, useState } from 'react'


import axios from 'axios';


import Read from './Read';

const Movies = () => {
    var [st, setst] = useState([])
    var  [single,setsingle]=useState([])
    var [update,setupdate]=useState(false)
    useEffect(() => {
        axios.get(" http://localhost:3005/movie")
            .then(response => {
                setst(st = response.data);
            })
            .catch(err => console.log(err))
    }, []);
    const dele =(id)=>{
        console.log("Dele"+id);
        axios.delete(" http://localhost:3005/movie/"+id)
        .then(response=>{
            alert("Deleted")
            window.location.reload(false)
        })
    }
    const updateval = (value)=>{
    setsingle(value);
    setupdate(true);
    }
     var finaljsx =  
     <TableContainer component={Paper}>
         <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
             <TableHead>
                 <TableRow>
                     <TableCell >MOVIE NAME</TableCell>
                     <TableCell>DIRECTOR</TableCell>
                     <TableCell>LANGUAGE</TableCell>
                     <TableCell>GENERE</TableCell>
                      <TableCell>RELEASE YEAR</TableCell>
                      <TableCell>DELECT</TableCell>
                      <TableCell>UPDATE</TableCell>
                 </TableRow>
             </TableHead>
             <TableBody>
                 {st.map((value,index)=>{
                     return<TableRow key={index}>
                         <TableCell>{value.id}</TableCell>
                         <TableCell>{value.dir}</TableCell>
                         <TableCell>{value.lang}</TableCell>
                         <TableCell>{value.gener}</TableCell>
                         <TableCell>{value.relyear}</TableCell>
                         <TableCell><Button variant='contained'
                         onClick={()=>dele(value.id)}>DELECT</Button> 
                         </TableCell>
                         <TableCell><Button variant='contained'
                         onClick={()=>updateval(value)}>UPDATE</Button> 
                         </TableCell>
                     </TableRow>
                 })}
             </TableBody>
         </Table>
     </TableContainer>
     if (update){
        finaljsx = <Read data={single} method="put"></Read>
     }
  return (
    <div>
         <br></br>
           <br></br>
           {finaljsx}
        </div>

    
  )
}

export default Movies