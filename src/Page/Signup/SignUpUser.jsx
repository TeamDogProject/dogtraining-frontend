import {
  Card,
  CardHeader,
  TextField,
  IconButton,
  Divider,
  CardActions,
  CardContent,
  Button,
  Grid,
} from '@mui/material'

import React, { useState } from 'react'
import { VisibilityOff, Lock, Visibility, Password } from '@mui/icons-material'
import './SignUpPage.css'
import SignUpService from '../../services/SignUpService'

function SignUpUser() {
  const [name, setName] = useState('')
  const [surname, setSurName] = useState('')
  const [userName, setUserName] = useState('')
  const [userDNI, setUserDNI] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userConfirmEmail, setUserConfirmEmail] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userConfirmPassword, setconfirmPassword] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [similarPassword, setNotSimilarPassword] = useState(false)

  const [isPassVisible, setIsPassVisible] = useState(false)

const handleChangeForm = async ()=> {
  const form = { name, surname,userName,userDNI,userEmail,userPhone,userPassword} 
  const result = await SignUpService(form)
  
}

const passwordLength = ()=>{
  return userPassword.length > 8
}

  const handlePassword = (e) => {
    setUserPassword(e.target.value)
  }

  const handleConfirmPassword = (e) => {
    setconfirmPassword(e.target.value)
  }

  const handlePass = (e) => {
    setIsPassVisible(!isPassVisible)
  }

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeSurname = (e) => {
    setSurName(e.target.value)
  }
 const handleChangeConfirmUserEmail = (e) => { 
  setUserConfirmEmail(e.target.value)
 }
  const handleChangeUserName = (e) => {
    setUserName(e.target.value)
  }
  const handleChangeUserDNI = (e) => {
    setUserDNI(e.target.value)
  }

  const handleChangeUserEmail = (e) => {
    setUserEmail(e.target.value)
  }

  const handleChangeUserPhone = (e) => {
    setUserPhone(e.target.value)
  }

  return (
    <>
      <div className="containerSignUp">
        <Card
          sx={{
            padding: 5,
            width: '100%',
            maxWidth: '800px',
            margin: '0 auto',
            backgroundColor: 'white',
            border: '2px #088395 solid',
          }}
        >
          <CardHeader title="User Register Form"></CardHeader>

          <CardContent sx={{ width: '100%' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  variant="outlined"
                  margin="dense"
                  onChange={handleChangeName}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Surname"
                  variant="outlined"
                  margin="dense"
                  onChange={handleChangeSurname}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="UserName"
                  variant="outlined"
                  margin="dense"
                  onChange={handleChangeUserName}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="IdentityCard"
                  variant="outlined"
                  margin="dense"
                  onChange={handleChangeUserDNI}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  variant="outlined"
                  margin="dense"
                  onChange={handleChangeUserEmail}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Confirm Email"
                  variant="outlined"
                  margin="dense"
                  onChange={handleChangeConfirmUserEmail}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Password"
                  onChange={handlePassword}
                  variant="outlined"
                  color={passwordLength() ? 'success' : 'warning'}
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
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label=" Confirm Password"
                  onChange={handleConfirmPassword}
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
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone"
                  variant="outlined"
                  margin="dense"
                  onChange={handleChangeUserPhone}
                />
              </Grid>
            </Grid>
          </CardContent>

          <CardActions sx={{ display: ' flex', justifyContent: 'flex-center' }}>
            <Button
              size="small"
              color="secondary"
              variant="contained"
              onClick={handleChangeForm}
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