import React from 'react'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import {createUser} from '../../../../services/userService'
import { Box } from '@mui/material';
import {Typography} from '@mui/material';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function EditUserForm({user}) {

    const [open, setOpen] = React.useState(false);
    const [users, setUsers] = useState([]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [name, setName] = useState('');
    const [surname, setDescription] = useState('');
    const [email, setDuration] = useState('');
    const [identity_card, setIdentityCard] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [confirmation_password, setConfirmationPassword] = useState('');
    const [role, setRole] = useState('');

    const handleChangeName = () => {
        setName(e.target.value)
    }

    const handleChangeSurname = () => {
        setDescription(e.target.value)
    }

    const handleChangeUsername = () => {
        setUserName(e.target.value)
    }
    

    const handleChangeEmail = () => {
        setDuration(e.target.value)
    }

    const handleChangeIdentityCard = () => {
        setIdentityCard(e.target.value)
    }

    const handleChangePassword = () => {
        setPassword(e.target.value)
    }

    const handleChangePhone = () => {
        setPhone(e.target.value)
    }

    const handleChangeConfirmationPassword = () => {
        setConfirmationPassword(e.target.value)
    }

    const handleChangeRole = () => {
        setRole(e.target.value)
    }

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

      const handleSubmit = async (e) => {
        e.preventDefault();
        const createNewUser = {
          name: name, 
          surname: surname,
          email: email,
          identity_card: identity_card,
          password: password, 
          phone: phone,
          confirmation_password: confirmation_password, 
          role: role
        };
        await createUser(createNewUser);
        setUsers(getUsers())
        }

  return (
    <div>
        <Button onClick={handleOpen} style={{ marginRight: 5,backgroundColor:'lightgray', border:'none',width:100, height:35, borderRadius:5, color:'black', fontSize:15, fontWeight:'bold', position:'absolute' }}>Edit</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ width:300, marginLeft:25 }}>
              Edit Course Form
            </Typography>
            <Typography id="modal-modal-description" sx={{ width:300, marginTop:4}}>
              <form onSubmit={handleSubmit}>
                <FormLabel sx={{ width:300, marginLeft:20 }}>Name</FormLabel>
                <TextField type="text" variant='outlined' value={user.name} onChange={handleChangeName} sx={{ width:300, marginLeft:20 }} />
                <FormLabel sx={{ width:300, marginLeft:20 }}>Surname</FormLabel>
                <TextField type="text" variant='outlined' value={user.surname} onChange={handleChangeSurname} sx={{ width:300, marginLeft:20 }} />
                <FormLabel sx={{ width:300, marginLeft:20 }}>Username</FormLabel>
                <TextField type="text" variant='outlined' value={user.username} onChange={handleChangeUsername} sx={{ width:300, marginLeft:20 }} />
                <FormLabel sx={{ width:300, marginLeft:20 }}>Email</FormLabel>
                <TextField type="text" variant='outlined' value={user.email} onChange={handleChangeEmail} sx={{ width:300, marginLeft:20 }} />
                <FormLabel sx={{ width:300, marginLeft:20 }}>Identity Card</FormLabel>
                <TextField type="text" variant='outlined' value={user.identity_card} onChange={handleChangeIdentityCard} sx={{ width:300, marginLeft:20 }} />
                <InputLabel id="place" sx={{ width:300, marginLeft:20 }}>Password</InputLabel>
                <TextField type="text" variant='outlined' value={user.password} onChange={handleChangePassword} sx={{ width:300, marginLeft:20 }} />
                <InputLabel id="place" sx={{ width:300, marginLeft:20 }}>Phone</InputLabel>
                <TextField type="text" variant='outlined' value={user.phone} onChange={handleChangePhone} sx={{ width:300, marginLeft:20 }} />
                <InputLabel id="place" sx={{ width:300, marginLeft:20 }}>Confirmation Password</InputLabel>
                <TextField type="text" variant='outlined' value={user.confirmation_password} onChange={handleChangeConfirmationPassword} sx={{ width:300, marginLeft:20 }} />
                <InputLabel id="role" sx={{ width:300, marginLeft:20 }}>Role</InputLabel>
                <Select
                    labelId="role"
                    id="role"
                    value={user.role}
                    label="Role"
                    onChange={handleChangeRole}
                    sx={{ width:300, marginLeft:20 }}
                >
                    <MenuItem value={'user'}>User</MenuItem>
                    <MenuItem value={'admin'}>Admin</MenuItem>
                </Select>
                <button type="submit" style={{ marginTop:15, marginLeft:340, backgroundColor:'purple', border:'none',width:120, height:35, borderRadius:5, color:'white', fontSize:15, fontWeight:'bold' }}>Save</button>
              </form>
            </Typography>
          </Box>
        </Modal>
    </div>
  )
}

export default EditUserForm