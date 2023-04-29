import React, { useEffect, useState } from 'react';
import listAllDogs from '../../../services/listAllDogs';
import { Grid, Typography } from '@mui/material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Box } from '@mui/material';


const ListDogs = () => {
  const [dogs, setDogs] = useState([]);

  const getDogs = async () => {
    const result = await listAllDogs();
    setDogs(result);
  };

  useEffect(() => {
    getDogs();
  }, []);

  const handleDeleteButton = () => {
    console.log('Haciendo click en el boton delete')
  } 

  const handleEditButton = () => {
    console.log('Haciendo click en el boton edit')
  }

  const handleAddButton = () => {
    console.log('Haciendo click en el boton add')
  }

  function displayDogs() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h6" color="white" marginLeft={2}>
              List Dogs
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableHead>
                    <Typography variant="h6" style={{ color: 'white', fontSize: 17, marginLeft:15 }}> 
                    <button onClick={handleAddButton} style={{ marginLeft:5, backgroundColor:'green', border:'none',width:100, height:35, borderRadius:5, color:'white', fontSize:15, fontWeight:'bold' }}>New Dog</button>
                    </Typography>
                </TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                      ID
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                      PHOTO
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                      NAME
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                      VALORATION
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                      PROBLEM
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                      ACTIONS
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dogs.map((dog) => (
                  <TableRow key={dog.id}>
                    <TableCell>
                      <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                        {dog.id}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                        {dog.photo}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                        {dog.name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                        {dog.valoration}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                        {dog.problem}
                      </Typography>
                    </TableCell>
                    <TableCell style={{ color: 'white', fontSize: 17 }}>
                          <div>
                            <button onClick={handleEditButton} style={{ marginLeft:5, backgroundColor:'lightgray', border:'none',width:100, height:35, borderRadius:5, color:'black', fontSize:15, fontWeight:'bold' }}>Edit</button>
                            <button onClick={handleDeleteButton} style={{ marginLeft:5, backgroundColor:'red', border:'none',width:100, height:35, borderRadius:5, color:'white',fontSize:15, fontWeight:'bold' }}>Delete</button>
                          </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    );
  }

  return <div>{displayDogs()}</div>;
};

export default ListDogs;
