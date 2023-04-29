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

  function displayUsers() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box><Typography variant="h6" color='white' marginLeft={2}>List Users</Typography></Box>
        </Grid>
        <TableContainer>
          <Table>
            <TableHead>
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
                      Add / Delete
                    </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
