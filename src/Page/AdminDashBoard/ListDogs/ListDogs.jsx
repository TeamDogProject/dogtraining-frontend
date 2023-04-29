import React, { useEffect, useState } from 'react'
import listAllDogs from '../../../services/listAllDogs';
import { Grid, Typography, Button } from '@mui/material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const ListDogs = () => {

  const [dogs, setDogs] = useState([])

  const getDogs = async () => {
      const result = await listAllDogs()
      setDogs(result)
  }
  
  useEffect(() => {
    getDogs()
  }, [])

  function displayDogs() {
    return (
      dogs.map((dog) =>{
        return(
          <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" color='white' marginLeft={2}>List Dogs</Typography>
          </Grid>
            <Grid item xs={10} sm={10} md={10} lg={12} key={dog.id}>
                    <TableContainer>
                      <Table>
                        <TableHead>
                          <TableRow >
                            <TableCell><Typography variant='h6' style={{ color:'white', fontSize:17 }}>ID</Typography></TableCell>
                            <TableCell><Typography variant='h6' style={{ color:'white', fontSize:17 }}>PHOTO</Typography></TableCell>
                            <TableCell><Typography variant='h6' style={{ color:'white',  fontSize:17 }}>NAME</Typography></TableCell>
                            <TableCell><Typography variant='h6' style={{ color:'white', fontSize:17 }}>VALORATION</Typography></TableCell>
                            <TableCell><Typography variant='h6' style={{ color:'white', fontSize:17 }}>PROBLEM</Typography></TableCell>
                            <TableCell><Typography variant='h6' style={{ color:'white', fontSize:17 }}>ACTIONS</Typography></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key={dog.id}>
                              <TableCell><Typography variant='h6' style={{ color:'white', fontSize:17 }}>{dog.id}</Typography></TableCell>
                              <TableCell><Typography variant='h6' style={{ color:'white', fontSize:17 }}>{dog.photo}</Typography></TableCell>
                              <TableCell><Typography variant='h6' style={{ color:'white', fontSize:17 }}>{dog.name}</Typography></TableCell>
                              <TableCell><Typography variant='h6' style={{ color:'white', fontSize:17 }}>{dog.valoration}</Typography></TableCell>
                              <TableCell><Typography variant='h6' style={{ color:'white', fontSize:17 }}>{dog.problem}</Typography></TableCell>
              
                              <TableCell>
         
                              </TableCell>
                            </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
            </Grid>
        </Grid>
      );
        
       
                {/*<table style={{ width:'55%', margin:'auto', border:'1px solid white', borderRadius:5}}>
                  <tr>
                    <th>Dog</th>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Breed</th>
                    <th>Age</th>
                    <th>Sex</th>
                    <th>Chip</th>
                    <th>Problem</th>
                    <th>Valoration</th>
                    <th style={{ textAlign:'center', columnSpan:'2' }}>Actions</th>
                  </tr>
                  <tr style={{ textAlign:'center', backgroundColor:'white', color:'#0A4D68'}}>
                    <td>{dog.id}</td>
                    <td>{dog.photo}</td>
                    <td>{dog.name}</td>
                    <td>{dog.breed}</td>
                    <td>{dog.age}</td>
                    <td>{dog.sex}</td>
                    <td>{dog.chip}</td>
                    <td>{dog.problem}</td>
                    <td>{dog.valoration}</td>
                    <td style={{ columSpan:2 }}><Link to=''><EditIcon/></Link></td>
                    <td style={{ columnSpan: 2 }}><Link to='#'><DeleteIcon/></Link></td>
                  </tr>
            </table>*/}

      })
    )
  }
  
  return(
    <div>
      {displayDogs()}
    </div>
  )
}

export default ListDogs