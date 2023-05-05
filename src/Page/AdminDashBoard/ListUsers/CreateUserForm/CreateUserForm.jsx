import React from 'react'
import { Button, Select } from '@mui/material'
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import { createDog } from '../../../../services/DogService';
import {FormLabel} from '@mui/material';
import { useState } from 'react';
import { listAllUsers } from '../../../../services/userService';
import { useEffect } from 'react';
import {InputLabel} from '@mui/material';
import {MenuItem} from '@mui/material';

function CreateUserForm() {

  const [open, setOpen] = React.useState(false);

  const[user_name, setName]= useState('')
  const[user_surname, setUserSurname]= useState('')
  const[user_username, setUserName]= useState('')
  const[user_email, setUserEmail]= useState('')
  const[user_identityCard, setUserIdentityCard]= useState('')
  const[user_password, setUserPassword]= useState('')
  const[user_phone, setUserPhone]= useState('')
  const[user_confirmationPassword, setUserConfirmationPassword]= useState('')
  const[user_role, setRole] = useState('')

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [users, setUsers ] = useState([]);


  const handleChangeName = (e) => {
    setName(e.target.value)
}

const handleChangeUserName = (e) => {
  setUserName(e.target.value)
}

const handleChangeSurname = (e) => {
  setUserSurname(e.target.value)
}

const handleChangeEmail = (e) => {
  setUserEmail(e.target.value)
}

const handleChangePassword = (e) => {
  setUserPassword(e.target.value)
}

const handleChangeIdentityCard = (e) => {
  setUserIdentityCard(e.target.value)
}

const handleChangePhone = (e) => {
  setUserPhone(e.target.value)
}

const handleChangeRole = (e) => {
    setRole(e.target.value)
}

const handleChangeConfirmationPassword = (e) => {
  setUserConfirmationPassword(e.target.value)
}

  const getUsers = async () => {
    const result = await listAllUsers();
    setUsers(result)
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    overflow: 'scroll',
    height:600,
    p: 4,
  };

  useEffect(()=> {
    getUsers();
}, []);

    const handleSubtmit = async (e) => {
        e.preventDefault();
        const createNewUser = {
        name:user_name,
        surname:user_surname, 
        username: user_username,
        email: user_email,
        identity_card: user_identityCard, 
        password: user_password,
        phone: user_phone, 
        confirmation_password: user_confirmationPassword,
        role: user_role
        };
        await createDog(createNewUser);
        setUsers(getUsers())
  }

  return (
    <div>
        <Button onClick={handleOpen} style={{ marginLeft:5, backgroundColor:'green', border:'none',width:135, height:35, borderRadius:5, color:'white', fontSize:15, fontWeight:'bold' }}>New Dog</Button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ width:300, marginLeft:45 }}>
                              Create User Form
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ width:300, marginTop:4}}>
                              <form onSubmit={handleSubtmit}>
                              <FormLabel sx={{ width:300, marginLeft:35 }}>Name</FormLabel>
                                <TextField type="text" variant='outlined' placeholder={user_name} onChange={handleChangeName} sx={{ width:300, marginLeft:35 }} />
                                <FormLabel sx={{ width:300, marginLeft:35 }}>Surname</FormLabel>
                                <TextField type="text" variant='outlined' placeholder={user_surname} onChange={handleChangeSurname} sx={{ width:300, marginLeft:35 }} />
                                <FormLabel sx={{ width:300, marginLeft:35 }}>Username</FormLabel>
                                <TextField type="text" variant='outlined' value={user_username} onChange={handleChangeUserName} sx={{ width:300, marginLeft:35 }} />
                                <FormLabel sx={{ width:300, marginLeft:35 }}>Email</FormLabel>
                                <TextField type="text" variant='outlined' placeholder={user_email} onChange={handleChangeEmail} sx={{ width:300, marginLeft:35 }} />
                                <FormLabel sx={{ width:300, marginLeft:35 }}>IdentityCard</FormLabel>
                                <TextField type="text" variant='outlined' value={user_identityCard} onChange={handleChangeIdentityCard} sx={{ width:300, marginLeft:35 }} />
                                <FormLabel sx={{ width:300, marginLeft:35 }}>Password</FormLabel>
                                <TextField type="text" variant='outlined' value={user_password} onChange={handleChangePassword} sx={{ width:300, marginLeft:35 }} />
                                <FormLabel sx={{ width:300, marginLeft:35 }}>Phone</FormLabel>
                                <TextField type="text" variant='outlined' value={user_phone} onChange={handleChangePhone} sx={{ width:300, marginLeft:35 }} />
                                <FormLabel sx={{ width:300, marginLeft:35 }}>ConfirmationPassword</FormLabel>
                                <TextField type="text" variant='outlined' value={user_confirmationPassword} onChange={handleChangeConfirmationPassword} sx={{ width:300, marginLeft:35 }} />
                                <InputLabel id="role" sx={{ width:300, marginLeft:35 }}>Role</InputLabel>
                                <Select
                                    labelId="role"
                                    id="role"
                                    placeholder={user_role}
                                    label="Role"
                                    onChange={handleChangeRole}
                                    sx={{ width:300, marginLeft:35  }}
                                >
                                    <MenuItem value={'male'}>Male</MenuItem>
                                    <MenuItem value={'female'}>Female</MenuItem>
                                </Select>
                                <button type="submit" style={{ marginTop:15, marginLeft:460, backgroundColor:'purple', border:'none',width:120, height:35, borderRadius:5, color:'white', fontSize:15, fontWeight:'bold' }}>Send</button>
                              </form>
                            </Typography>
                          </Box>
                        </Modal>
    </div>
  )
}

export default CreateUserForm