import React, { useEffect, useState } from 'react';
import { listAllUsers } from '../../../services/userService';
import { Grid, Typography } from '@mui/material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import {Box} from '@mui/material';
import Button from '@mui/material/Button';
import {Modal} from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ListUsers = () => {

  const [users, setUsers] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                        <Button onClick={handleOpen} style={{ marginLeft:5, backgroundColor:'green', border:'none',width:100, height:35, borderRadius:5, color:'white', fontSize:15, fontWeight:'bold' }}>New User</Button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                              Text in a modal
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                          </Box>
                        </Modal>
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
