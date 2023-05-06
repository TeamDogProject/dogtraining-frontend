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

function EditUserForm({show, close, userId, userName, userSurname, userUserName, userEmail,userIdentityCard,userPassword,userPhone,userConfirmationPassword,userRole }) {
    console.log(userId, userName, userSurname, userUserName, userEmail,userIdentityCard,userPassword,userPhone,userConfirmationPassword,userRole )
    
    const [user_Name, setName]= useState(userName)
    const [user_Surname, setSurname ] = useState(userSurname)
    const [user_UserName, setUserName ] = useState(userUserName)
    const [user_Email, setEmail ] = useState(userEmail)
    const [user_IdentityCard, setIdentityCard] = useState(userIdentityCard)
    const [user_Password, setPassword] = useState(userPassword)
    const [user_Phone, setPhone] = useState(userPhone)
    const [user_ConfirmationPassword, setConfirmationPassword]= useState(userConfirmationPassword)
    const [user_Role, setRole]= useState(userRole)
  
  
    const handleClose = () => close();

    const handleChangeName= (e) =>{
      setName(e.target.value)
    }

    const handleChangeSurname= (e) =>{
      setSurname(e.target.value)
    }

    const handleChangeUserName= (e) =>{
      setUserName(e.target.value)
    }

    const handleChangeEmail= (e) =>{
      setEmail(e.target.value)
    }

    const handleChangeIdentityCard= (e) =>{
      setIdentityCard(e.target.value)
    }

    const handleChangePassword= (e) =>{
      setPassword(e.target.value)
    }

    const handleChangePhone= (e) =>{
      setPhone(e.target.value)
    }

    const handleChangeConfirmationPassword= (e) =>{
      setConfirmationPassword(e.target.value)
    }

    const handleChangeRole= (e) =>{
      setRole(e.target.value)
    }
   
    const handleSaveUser = async (e) => {
      console.log(userId)
      e.preventDefault();
      try {
        await saveUser(
          userId,
          user_Name,
          user_Surname,
          user_UserName,
          user_Email,
          user_IdentityCard,
          user_Password,
          user_Phone,
          user_ConfirmationPassword,
          user_Role
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
                <TextField type="text" variant='outlined' placeholder={userName} onChange={handleChangeName} sx={{ width:300, marginLeft:35 }} />
                <FormLabel sx={{ width:300, marginLeft:35 }}>Surname</FormLabel>
                <TextField type="text" variant='outlined' placeholder={userSurname} onChange={handleChangeSurname} sx={{ width:300, marginLeft:35 }} />
                <FormLabel sx={{ width:300, marginLeft:35 }}>Username</FormLabel>
                <TextField type="text" variant='outlined' placeholder={userUserName} onChange={handleChangeUserName} sx={{ width:300, marginLeft:35 }} />
                <FormLabel sx={{ width:300, marginLeft:35 }}>Email</FormLabel>
                <TextField type="text" variant='outlined' placeholder={userEmail} onChange={handleChangeEmail} sx={{ width:300, marginLeft:35 }} />
                <FormLabel sx={{ width:300, marginLeft:35 }}>IdentityCard</FormLabel>
                <TextField type="text" variant='outlined' placeholder={userIdentityCard} onChange={handleChangeIdentityCard} sx={{ width:300, marginLeft:35 }} />
                <FormLabel sx={{ width:300, marginLeft:35 }}>Password</FormLabel>
                <TextField type="text" variant='outlined' placeholder={userPassword} onChange={handleChangePassword} sx={{ width:300, marginLeft:35 }} />
                <FormLabel sx={{ width:300, marginLeft:35 }}>Phone</FormLabel>
                <TextField type="text" variant='outlined' placeholder={userPhone} onChange={handleChangePhone} sx={{ width:300, marginLeft:35 }} />
                <FormLabel sx={{ width:300, marginLeft:35 }}>ConfirmationPassword</FormLabel>
                <TextField type="text" variant='outlined' placeholder={userConfirmationPassword} onChange={handleChangeConfirmationPassword} sx={{ width:300, marginLeft:35 }} />
                <InputLabel id="role" sx={{ width: 300, marginLeft: 35 }}>Role</InputLabel>
                <Select
                  labelId="role"
                  id="role"
                  placeholder={userRole}
                  label="role"
                  onChange={handleChangeRole}
                  sx={{ width: 300, marginLeft: 35 }}
                >
                  <MenuItem value={'admin'}>admin</MenuItem>
                  <MenuItem value={'user'}>user</MenuItem>
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