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
        <Card sx={{ width: '700px', backgroundColor: blue[100] }} raised={true}>
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
            <Button size="small" color="secondary" variant="contained">
              Register
            </Button>
            <Button size="small" color="primary" variant="contained">
              Login
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  )
}

export default Login