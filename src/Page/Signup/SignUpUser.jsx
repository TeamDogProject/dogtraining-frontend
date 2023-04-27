import { Card, CardHeader, TextField, IconButton, Divider, CardActions, CardContent, Button } from '@mui/material'
import { blue } from '@mui/material/colors'
import React, { useState } from 'react'
import { VisibilityOff, Lock, Visibility } from '@mui/icons-material'



function SignUpUser() {

    const [name, setName] = useState('')
    const [surname, setSurName] = useState('')
    const [userName, setUserName] = useState('')
    const [userDNI, setUserDNI] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPhone, setUserPhone] = useState('')

    const [isPassVisible, setIsPassVisible] = useState(false)

  const handlePass = (e)=>{
        setIsPassVisible(!isPassVisible)
  }
 
     const handleChangeName = (e)=>{
        setName(e.target.value)
    }

    const handleChangeSurname = (e)=>{
        setSurName(e.target.value)
    }
     
    const handleChangeUserName = (e)=>{
        setUserName(e.target.value)
    }
    const handleChangeUserDNI = (e)=>{
        setUserDNI(e.target.value)
    }
    
    const handleChangeUserEmail = (e)=>{
        setUserEmail(e.target.value)
      }
    
    const handleChangeUserPhone =(e)=>{
        setUserPhone(e.target.value)
    }

  return (
    <>
      <div className="containerSignUp">
        <Card
          sx={{
            height: '400px',
            width: '100vw',
            backgroundColor: 'white',
            padding: 1,
            border: 0
          }}
          
        >

        <CardContent>
          <CardHeader title="User Registration Form"></CardHeader>
          <TextField 
            sx={{width: 300 }}
            label="Name"
            variant="outlined"
            margin="dense"
            onChange={handleChangeName}
          />
          <TextField
            sx={{ marginLeft: 2, width: 400  }}
            label="Surname"
            variant="outlined"
            margin="dense"
            onChange={handleChangeSurname}
          />

          <TextField
            sx={{ marginLeft: 2 , width: 250}}
            label="UserName"
            variant="outlined"
            margin="dense"
            onChange={handleChangeUserName}
          />

          <TextField
            sx={{ marginLeft: 2 }}
            label="IdentityCard"
            variant="outlined"
            margin="dense"
            onChange={handleChangeUserDNI}
          />

         <TextField
            label="Email"
            variant="outlined"
            margin="dense"
            onChange={handleChangeUserEmail}
           />

           <TextField
            sx={{ marginLeft: 2 }}
            label="Confirm Email"
            variant="outlined"
            margin="dense"
            onChange={handleChangeUserEmail}
           />


           <TextField
            sx={{ marginLeft: 2 }}
            label="Password"
            variant="outlined"
            margin="dense"
            type={isPassVisible ? 'text' : 'password'}
            InputProps={{
                startAdornment: <Lock />,
                endAdornment: (
                  <IconButton onClick={handlePass}>
                    {isPassVisible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
           ></TextField> 

           <TextField
            sx={{ marginLeft: 2 }}
            label=" Confirm Password"
            variant="outlined"
            margin="dense"
            type={isPassVisible ? 'text' : 'password'}
            InputProps={{
                startAdornment: <Lock />,
                endAdornment: (
                  <IconButton onClick={handlePass}>
                    {isPassVisible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
           ></TextField>

           <TextField
           sx={{marginLeft: 2 }}
            label="Phone"
            variant="outlined"
            margin="dense"
            onChange={handleChangeUserPhone}
           />
           </CardContent>

           <Divider sx={{paddingTop:4 }} />

           <CardActions sx={{ display: ' flex', justifyContent: 'flex-center' }}>

           <Button
              size="small"
              color="secondary"
              variant="contained"
              sx={{ backgroundColor: '#088395', borderTop:2, marginLeft: 5 }}
            >
              Register User
            </Button>
           </CardActions>
        </Card>
      </div>

      
    </>
  )
}


export default SignUpUser

