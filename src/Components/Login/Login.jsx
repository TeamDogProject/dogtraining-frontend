
import {Button, Card, CardActions, CardContent, CardHeader,Divider,IconButton,TextField} from '@mui/material'
import { useState,useContext } from 'react'
import { Email, VisibilityOff,Lock, Visibility } from '@mui/icons-material'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/authService'
import { getProfile } from '../../services/userService'
import { LogingContext } from '../../context/loginContext'

function Login() {

  const navigate = useNavigate()
  const { isLoggedIn, setIsLoggedIn } = useContext(LogingContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

const onSignUp = () => {
    navigate('/signUp')
}

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onLogin = async () => {
    const form = { email, password };
    const result = await login(form);
   
  
    if (localStorage.getItem('token')) {
      console.log('Inicio de sesión exitoso');
      setIsLoggedIn(true)
      
      const resprofile = await getProfile();
  
      if (resprofile.role === 'admin') {
        console.log('Perfil de administrador detectado');
        navigate('/adminDashBoard');
      } else {
        console.log('Perfil de usuario detectado');
        navigate('/userDashBoard');
      }
    } else {
      console.log('Inicio de sesión fallido');
    }
  };
  


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
              onClick={onSignUp}
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