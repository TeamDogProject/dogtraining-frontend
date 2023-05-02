import { blue } from '@mui/material/colors'
import {Button, Card, CardActions, CardContent, CardHeader,Divider,IconButton,TextField} from '@mui/material'
import { useState } from 'react'
import { Email, VisibilityOff,Lock, Visibility } from '@mui/icons-material'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/authService'
import { getProfile } from '../../services/userService'
import AdminDashBoard from '../../Page/AdminDashBoard/AdminDashBoard'


function Login() {

  const navigate = useNavigate()
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onLogin = async() => {
    const form = {email, password}
    const result = await login(form)
    const resprofile = await getProfile()
    console.log(resprofile)
    if(resprofile.role === 'admin')
    {
      navigate('/adminDashBoard')
    }else {
      navigate('/home')
    }
  }

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
              onChange={handleChangeEmail}
              InputProps={{ startAdornment: <Email /> }}
            ></TextField>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              type={isPassVisible ? 'text' : 'password'}
              onChange={handleChangePassword}
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
              onClick={onLogin}>
              Login
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  )
}

export default Login