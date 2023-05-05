import React from 'react'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { saveUser } from '../../../../services/userService'

function EditUserForm({show, close, userId, name, surname, username, email, identityCard, password, phone, confirmationPassword, role}) {
    console.log(userId, name, surname, username, email, identityCard, password, phone, confirmationPassword, role)
    
    const[user_name, setName]= useState(name)
    const[user_surname, setSurname]= useState(surname)
    const[user_username, setUserName]=useState(username)
    const[user_email, setUserEmail]= useState(email)
    const[user_identityCard, setUserIdentityCard]= useState(identityCard)
    const[user_password, setUserPassword]= useState(password)
    const[user_phone, setUserPhone]= useState(phone)
    const[user_confirmationPassword, setUserConfirmationPassword]= useState(confirmationPassword)
    const[user_role, setUserRole]= useState(role)
  
  
    const handleClose = () => close();


    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeSurname = (e) => {
      setSurname(e.target.value)
    }
    const handleChangeUsername = (e) => {
      setUserName(e.target.value)
    }

    const handleChangeEmail = (e) => {
      setUserEmail(e.target.value)
    }

    const handleChangeIdentityCard = (e) => {
      setUserIdentityCard(e.target.value)
    }

    const handleChangePassword = (e) => {
      setUserPassword(e.target.value)
    }

    const handleChangePhone = (e) => {
      setUserPhone(e.target.value)
    }

    const handleChangeRole = (e) => {
      setUserRole(e.target.value)
    }

    const handleChangeConfirmationPassword = (e) => {
      setUserConfirmationPassword(e.target.value)
    }

    const handleSaveUser = async (e) => {
      console.log(userId)
      e.preventDefault();
      try {
        await saveUser(
          userId,
          user_name,
          user_username,
          user_surname,
          user_email,
          user_identityCard,
          user_password,
          user_phone,
          user_confirmationPassword,
          user_role
        )
      } catch (error) {
  
      }
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        height:600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        overflow:'scroll',
        boxShadow: 24,
        p: 4,
      };

  return (
    <div>
        <Modal
          open={show}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ width:300, marginLeft:45 }}>
              Edit User Form
            </Typography>
            <Typography id="modal-modal-description" sx={{ width:300, marginTop:4}}>
              <form onSubmit={handleSaveUser}>
                <FormLabel sx={{ width:300, marginLeft:35 }}>Name</FormLabel>
                <TextField type="text" variant='outlined' placeholder={name} onChange={handleChangeName} sx={{ width:300, marginLeft:35 }} />
                <FormLabel sx={{ width:300, marginLeft:35 }}>Surname</FormLabel>
                <TextField type="text" variant='outlined' placeholder={surname} onChange={handleChangeSurname} sx={{ width:300, marginLeft:35 }} />
                <FormLabel sx={{ width:300, marginLeft:35 }}>Username</FormLabel>
                <TextField type="text" variant='outlined' placeholder={username} onChange={handleChangeUsername} sx={{ width:300, marginLeft:35 }} />
                <FormLabel sx={{ width:300, marginLeft:35 }}>Email</FormLabel>
                <TextField type="text" variant='outlined' placeholder={email} onChange={handleChangeEmail} sx={{ width:300, marginLeft:35 }} />
                <FormLabel sx={{ width:300, marginLeft:35 }}>IdentityCard</FormLabel>
                <TextField type="text" variant='outlined' placeholder={identityCard} onChange={handleChangeIdentityCard} sx={{ width:300, marginLeft:35 }} />
                <InputLabel id="place" sx={{ width:300, marginLeft:35 }}>Password</InputLabel>
                <TextField type="text" variant='outlined' placeholder={password} onChange={handleChangePassword} sx={{ width:300, marginLeft:35 }} />
                <InputLabel id="place" sx={{ width:300, marginLeft:35 }}>Phone</InputLabel>
                <TextField type="text" variant='outlined' placeholder={phone} onChange={handleChangePhone} sx={{ width:300, marginLeft:35 }} />
                <InputLabel id="place" sx={{ width:300, marginLeft:35 }}>Confirmation Password</InputLabel>
                <TextField type="text" variant='outlined' placeholder={confirmationPassword} onChange={handleChangeConfirmationPassword} sx={{ width:300, marginLeft:35 }} />
                <InputLabel id="role" sx={{ width:300, marginLeft:35 }}>Role</InputLabel>
                <Select
                    labelId="role"
                    id="role"
                    placeholder={role}
                    label="Role"
                    onChange={handleChangeRole}
                    sx={{ width:300, marginLeft:35 }}
                >
                    <MenuItem value={'user'}>User</MenuItem>
                    <MenuItem value={'admin'}>Admin</MenuItem>
                </Select>
                <Button variant="contained" type="submit" style={{ marginTop: 15, marginLeft: 510, color:'white', backgroundColor:'purple' }}>
                Save
              </Button> 
              </form>
            </Typography>
          </Box>
        </Modal>
    </div>
  )
}

export default EditUserForm