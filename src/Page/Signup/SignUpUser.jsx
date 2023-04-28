import { Card, CardHeader, TextField, IconButton, Divider, CardActions, CardContent, Button } from '@mui/material'
import { blue, grey } from '@mui/material/colors'
import React, { useState } from 'react'
import { VisibilityOff, Lock, Visibility } from '@mui/icons-material'
import './SignUpPage.css'


function SignUpUser() {

    const [name, setName] = useState('')
    const [surname, setSurName] = useState('')
    const [userName, setUserName] = useState('')
    const [userDNI, setUserDNI] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [userConfirmPassword, setconfirmPassword] = useState ('')
    const [userPassword, setPassword] = useState('')
    const [passwordValidate, setPasswordValidate]= useState(false)
    const [similarPassword, setNotSimilarPassword] = useState(false)

    const [isPassVisible, setIsPassVisible] = useState(false)

    const handlePassword = (e)=>{
      setPassword(e.target.value)
          if (
            userPassword.length > 8 &&
            userPassword.includes('^(?=w*d)(?=w*[A-Z])(?=w*[a-z])S{8,16}')
          ) {
            setPasswordValidate(true)
          } else {
            setPasswordValidate(false)
          }
    }

    const handleChangePassword = (e) =>{
       setconfirmPassword(e.target.value) 


    }

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
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            width: '800px',
            backgroundColor: 'white',
            padding: 1,
            border: '2px #088395 solid',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <CardContent sx={{ marginLeft: 5 }}>
            <CardHeader title="User Registration Form"></CardHeader>
            <TextField
              sx={{ width: 500 }}
              label="Name"
              variant="outlined"
              margin="dense"
              onChange={handleChangeName}
            />
            <TextField
              sx={{ marginLeft: 0, width: 500 }}
              label="Surname"
              variant="outlined"
              margin="dense"
              onChange={handleChangeSurname}
            />

            <TextField
              sx={{ marginLeft: 0, width: 250 }}
              label="UserName"
              variant="outlined"
              margin="dense"
              onChange={handleChangeUserName}
            />

            <TextField
              sx={{ marginLeft: 3 }}
              label="IdentityCard"
              variant="outlined"
              margin="dense"
              onChange={handleChangeUserDNI}
            />

            <TextField
              sx={{ marginLeft: 0, width: 250 }}
              label="Email"
              variant="outlined"
              margin="dense"
              onChange={handleChangeUserEmail}
            />

            <TextField
              sx={{ marginLeft: 3 }}
              label="Confirm Email"
              variant="outlined"
              margin="dense"
              onChange={handleChangeUserEmail}
            />

            <TextField
              sx={{ marginLeft: 0, width: 250 }}
              label="Password"
              onChange={handlePassword}
              variant="outlined"
              color={passwordValidate ? 'success' : 'warning'}
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
              sx={{ marginLeft: 3, width: 233 }}
              label=" Confirm Password"
              onChange={handleChangePassword}
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
              sx={{ marginLeft: 0 }}
              label="Phone"
              variant="outlined"
              margin="dense"
              onChange={handleChangeUserPhone}
            />
          </CardContent>

          <Divider sx={{ paddingTop: 2 }} />

          <CardActions sx={{ display: ' flex', justifyContent: 'flex-center' }}>
            <Button
              size="small"
              color="secondary"
              variant="contained"
              sx={{
                backgroundColor: '#088395',
                borderTop: 2,
                marginLeft: 2,
                marginRight: 3,
              }}
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

