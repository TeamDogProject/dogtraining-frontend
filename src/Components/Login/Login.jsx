import { blue } from '@mui/material/colors'
import {Button, Card, CardActions, CardContent, CardHeader,Divider,IconButton,TextField} from '@mui/material'
import { useState } from 'react'
import { Email, VisibilityOff,Lock, Visibility } from '@mui/icons-material'
import './Login.css'

function Login() {

  const [isPassVisible, setIsPassVisible] = useState(false)

  function handleClick(){
    setIsPassVisible(!isPassVisible)
  }
  return (
    <>
      <div className="containerLogin">
        <Card
          sx={{
            width: '700px',
            backgroundColor: 'white',
            border: '2px #088395 solid',
          }}
          raised={true}
        >
          <CardHeader title="Login"> </CardHeader>
          <CardContent>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              InputProps={{ startAdornment: <Email /> }}
            ></TextField>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              type={isPassVisible ? 'text' : 'password'}
              InputProps={{
                startAdornment: <Lock />,
                endAdornment: (
                  <IconButton onClick={handleClick}>
                    {isPassVisible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
            ></TextField>
            <Divider />
          </CardContent>
          <CardActions sx={{ display: ' flex', justifyContent: 'flex-end' }}>
            <Button
              size="small"
              color="secondary"
              variant="contained"
              sx={{ backgroundColor: '#088395' }}
            >
              Register
            </Button>
            <Button
              size="small"
              color="primary"
              variant="contained"
              sx={{ backgroundColor: '#0A4D68' }}
            >
              Login
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  )
}

export default Login