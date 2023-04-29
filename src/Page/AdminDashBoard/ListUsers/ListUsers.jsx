import React, { useEffect, useState } from 'react';
import listAllUsers from '../../../services/listAllUsers';
import { Grid, Typography } from '@mui/material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import {Box} from '@mui/material';

const ListUsers = () => {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const result = await listAllUsers();
    setUsers(result);
  };
  
  useEffect(() => {
    getUsers();
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

  function displayUsers() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h6" color='white' marginLeft={2}>List Users
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableHead>
                    <Typography variant="h6" style={{ color: 'white', fontSize: 17, marginLeft:15 }}> 
                    <button onClick={handleAddButton} style={{ marginLeft:5, backgroundColor:'green', border:'none',width:100, height:35, borderRadius:5, color:'white', fontSize:15, fontWeight:'bold' }}>New User</button>
                    </Typography>
              </TableHead>
              <TableRow >
                <TableCell><Typography variant='h6' style={{ color:'white', fontSize:17 }}>ID</Typography></TableCell>
                <TableCell><Typography variant='h6' style={{ color:'white', fontSize:17 }}>NAME</Typography></TableCell>
                <TableCell><Typography variant='h6' style={{ color:'white',  fontSize:17 }}>EMAIL</Typography></TableCell>
                <TableCell><Typography variant='h6' style={{ color:'white', fontSize:17 }}>PHONE</Typography></TableCell>
                <TableCell><Typography variant='h6' style={{ color:'white', fontSize:17 }}>ROLE</Typography></TableCell>
                <TableCell><Typography variant='h6' style={{ color:'white', fontSize:17 }}>ACTIONS</Typography></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell><Typography variant='h6' style={{ color:'white', fontSize:17 }}>{user.id}</Typography></TableCell>
                  <TableCell><Typography variant='h6' style={{ color:'white', fontSize:17 }}>{user.name}</Typography></TableCell>
                  <TableCell><Typography variant='h6' style={{ color:'white', fontSize:17 }}>{user.email}</Typography></TableCell>
                  <TableCell><Typography variant='h6' style={{ color:'white', fontSize:17 }}>{user.phone}</Typography></TableCell>
                  <TableCell><Typography variant='h6' style={{ color:'white', fontSize:17 }}>{user.role}</Typography></TableCell>
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
  
  return(
    <div>
      {displayUsers()}
    </div>
  );
};

export default ListUsers;
