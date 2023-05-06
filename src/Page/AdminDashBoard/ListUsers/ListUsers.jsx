import React, { useEffect, useState } from 'react';
import { listAllUsers } from '../../../services/userService';
import { Grid, Typography } from '@mui/material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Box } from '@mui/material';
import api from '../../../services/config';
import CreateUserForm from './CreateUserForm/CreateUserForm';
import Button from '@mui/material/Button';
import EditUserForm from './EditUserForm/EditUserForm';

const ListUsers = () => {

  const [users, setUsers] = useState([]);

  const [showModal, setShowModal] = useState(false)

    const [userId, setId]= useState('')
    const [userName, setName]= useState('')
    const [userSurname, setSurname ] = useState('')
    const [userUserName, setUserName ] = useState('')
    const[userEmail, setEmail ] = useState('')
    const[userIdentityCard, setIdentityCard] = useState('')
    const[userPassword, setPassword] = useState('')
    const[userPhone, setPhone] = useState('')
    const[userConfirmationPassword, setConfirmationPassword]= useState('')
    const[userRole, setRole]= useState('')

    const handleOpen = (userId, userName, userSurname,userUserName, userEmail, userIdentityCard, userPassword, userPhone, userConfirmationPassword, userRole) => {
      setShowModal(true)
      setId(userId)
      setName(userName)
      setSurname(userSurname)
      setEmail(userEmail)
      setIdentityCard(userIdentityCard)
      setPassword(userPassword)
      setPhone(userPhone)
      setConfirmationPassword(userConfirmationPassword)
      setRole(userRole)
      console.log(userId, userName, userSurname,userUserName, userEmail, userIdentityCard, userPassword, userPhone, userConfirmationPassword, userRole)
    }
  
  
  const handleClose = () => {
    setShowModal(false)
  }

  const getUsers = async () => {
    const result = await listAllUsers();
    setUsers(result);
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
    <>
    <EditUserForm close={handleClose} show={showModal} userId={userId} userName={userName} userSurname={userSurname} userUserName={userUserName} userEmail={userEmail} userIdentityCard={userIdentityCard} userPassword={userPassword} userPhone={userPhone} userConfirmationPassword={userConfirmationPassword} userRole={userRole}/>
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
                            <Button onClick={() => handleOpen(user.id,user.name, user.surname,user.username, user.email, user.identity_card, user.password,user.phone,user.confirmation_password, user.role)} style={{ marginRight: 50,backgroundColor:'lightgray', border:'none',width:100, height:35, borderRadius:5, color:'black', fontSize:15, fontWeight:'bold', position:'absolute' }}>Edit</Button>
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
    </>
    );
  }
  
  return(
    <div>
      {displayUsers()}
    </div>
  );
};

export default ListUsers;
