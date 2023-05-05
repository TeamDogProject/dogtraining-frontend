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

function EditUserForm({show, close, userId, userName, userSurname ,userUsername,userEmail, userIdentityCard, userPassword, userPhone, userConfirmationPassword, userRole}) {
    console.log(userName, userUsername,userEmail, userIdentityCard, userPassword, userPhone, userConfirmationPassword, userRole)
    
    const[user_name, setUserName]= useState(userName)
    const[user_surname, setUserSurname]= useState(userSurname)
    const[user_email, setUserEmail]= useState(userEmail)
    const[user_identityCard, setUserIdentityCard]= useState(userIdentityCard)
    const[user_password, setUserPassword]= useState(userPassword)
    const[user_phone, setUserPhone]= useState(userPhone)
    const[user_confirmationPassword, setUserConfirmationPassword]= useState(userConfirmationPassword)
    const[user_role, setRole] = useState(userRole)
  
    const handleClose = () => close();


    const handleChangeName = (e) => {
        setUserName(e.target.value)
    }

    const handleChangeSurname = (e) => {
      setUserSurname(e.target.value)
    }

    const handleChangeUsername = (e) => {
      setUserEmail(e.target.value)
    }
    

    const handleChangeEmail = (e) => {
      setUserIdentityCard(e.target.value)
    }

    const handleChangeIdentityCard = (e) => {
      setUserPassword(e.target.value)
    }

    const handleChangePassword = (e) => {
      setUserPhone(e.target.value)
    }

    const handleChangePhone = (e) => {
      setUserConfirmationPassword(e.target.value)
    }

    const handleChangeRole = (e) => {
        setRole(e.target.value)
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
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
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
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ width:300, marginLeft:25 }}>
              Edit User Form
            </Typography>
            <Typography id="modal-modal-description" sx={{ width:300, marginTop:4}}>
              <form onSubmit={handleSaveUser}>
                <FormLabel sx={{ width:300, marginLeft:20 }}>Name</FormLabel>
                <TextField type="text" variant='outlined' placeholder={userName} onChange={handleChangeName} sx={{ width:300, marginLeft:20 }} />
                <FormLabel sx={{ width:300, marginLeft:20 }}>Surname</FormLabel>
                <TextField type="text" variant='outlined' placeholder={userSurname} onChange={handleChangeSurname} sx={{ width:300, marginLeft:20 }} />
                <FormLabel sx={{ width:300, marginLeft:20 }}>Username</FormLabel>
                <TextField type="text" variant='outlined' placeholder={userUsername} onChange={handleChangeUsername} sx={{ width:300, marginLeft:20 }} />
                <FormLabel sx={{ width:300, marginLeft:20 }}>Email</FormLabel>
                <TextField type="text" variant='outlined' placeholder={userEmail} onChange={handleChangeEmail} sx={{ width:300, marginLeft:20 }} />
                <FormLabel sx={{ width:300, marginLeft:20 }}>Identity Card</FormLabel>
                <TextField type="text" variant='outlined' placeholder={userIdentityCard} onChange={handleChangeIdentityCard} sx={{ width:300, marginLeft:20 }} />
                <InputLabel id="place" sx={{ width:300, marginLeft:20 }}>Password</InputLabel>
                <TextField type="text" variant='outlined' placeholder={userPassword} onChange={handleChangePassword} sx={{ width:300, marginLeft:20 }} />
                <InputLabel id="place" sx={{ width:300, marginLeft:20 }}>Phone</InputLabel>
                <TextField type="text" variant='outlined' placeholder={userPhone} onChange={handleChangePhone} sx={{ width:300, marginLeft:20 }} />
                <InputLabel id="place" sx={{ width:300, marginLeft:20 }}>Confirmation Password</InputLabel>
                <TextField type="text" variant='outlined' placeholder={userConfirmationPassword} onChange={handleChangeConfirmationPassword} sx={{ width:300, marginLeft:20 }} />
                <InputLabel id="role" sx={{ width:300, marginLeft:20 }}>Role</InputLabel>
                <Select
                    labelId="role"
                    id="role"
                    placeholder={userRole}
                    label="Role"
                    onChange={handleChangeRole}
                    sx={{ width:300, marginLeft:20 }}
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