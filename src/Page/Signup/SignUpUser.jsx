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
import { VisibilityOff, Lock, Visibility } from '@mui/icons-material'
import './SignUpPage.css'

function SignUpUser() {
  const [name, setName] = useState('')
  const [surname, setSurName] = useState('')
  const [userName, setUserName] = useState('')
  const [userDNI, setUserDNI] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userConfirmPassword, setconfirmPassword] = useState('')
  const [userPassword, setPassword] = useState('')
  const [passwordValidate, setPasswordValidate] = useState(false)
  const [similarPassword, setNotSimilarPassword] = useState(false)

  const [isPassVisible, setIsPassVisible] = useState(false)

  const handlePassword = (e) => {
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

  const handleChangePassword = (e) => {
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
                  onChange={handleChangeUserEmail}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
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
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
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
