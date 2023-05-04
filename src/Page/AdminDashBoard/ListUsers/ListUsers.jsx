import React, { useEffect, useState } from 'react';
import { listAllUsers } from '../../../services/userService';
import { Grid, Typography } from '@mui/material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Box } from '@mui/material';
import api from '../../../services/config';
import CreateUserForm from './CreateUserForm/CreateUserForm';
import EditUserForm from './EditUserForm/EditUserForm';

const ListUsers = () => {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const result = await listAllUsers();
    setUsers(result);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      const { data } = await api.delete(`/users/${id}`, {
        headers: {
          'token': localStorage.getItem('token')
        }
      });
      setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
      return data;
    } catch (error) {
      console.log(error);
    }
  };

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
                    <div>
                      <CreateUserForm />
                    </div>
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
                            <EditUserForm user={{id:user.id, name:user.name, surname:user.surname, email:user.email, identity_card:user.identity_card, password: user.password, phone:user.phone, confirmation_password:user.confirmation_password, role:user.role}}/>
                            <button  onClick={() => deleteUser(user.id)} style={{ marginLeft:105, backgroundColor:'red', border:'none',width:100, height:35, borderRadius:5, color:'white',fontSize:15, fontWeight:'bold' }}>Delete</button>
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
