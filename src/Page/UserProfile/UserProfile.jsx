import React, { useState, useEffect } from 'react'
import { getProfile } from '../../services/userService'
import { deleteUser } from '../../services/userService'
import { changePassword } from '../../services/userService'
import { useContext } from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material'
import './UserProfile.css'
import DeleteIcon from '@mui/icons-material/Delete'
import Popover from '@mui/material/Popover'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state'
import { useNavigate } from 'react-router-dom'
import { LogingContext } from '../../context/loginContext'

function UserProfilePage() {

  const [userProfile, setUserProfile] = useState('')
  const [userToDelete, setUserToDelete] = useState('')
  const { isLoggedIn, setIsLoggedIn } = useContext(LogingContext)

  //para el imput que cambia la contraseña
  const [showForm, setShowForm] = useState(false)
  const [password, setPassword] = useState('') // Estado del campo Password
  const [confirmationPassword, setConfirmationPassword] = useState('') // Estado del campo confirmation_password
  const [validateConfirmation, setValidateConfirmation] = useState(null) // si hay match me cambia este estado, para cambiar color imput en función del estado

const navigate = useNavigate()

useEffect(() => {
  fetchUserProfile()
}, [])

  const fetchUserProfile = async () => {
    const result = await getProfile()
    setUserProfile(result)
  }

  //cambia Contraseña
  const handleOpenForm = () => {
    setShowForm(true)
  }

  const handleCloseForm = () => {
    setShowForm(false)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleConfirmationPasswordChange = (event) => {
    setConfirmationPassword(event.target.value)
    if (password === event.target.value) {
      setValidateConfirmation(true)
    } else {
      setValidateConfirmation(false)
    }
  }

  const handleUpdatePassword = async () => {
    try {
      if (password !== confirmationPassword) {
        throw new Error('Passwords do not match')
      }

      const data = await changePassword(password)
      location.reload();
      
      return data
      
    } catch (error) {
      console.error(error)
    }
   
  }

  const handleDeleteUser2 = async () => {
    try {
      // Llamar al servicio deleteUser
      await deleteUser()

      // Si la eliminación del usuario es exitosa, eliminar el token del localStorage
      await localStorage.removeItem('token')

      // Actualizar el estado de la variable userToDelete si es necesario
      setIsLoggedIn(false)

      console.log('Usuario eliminado exitosamente')
      navigate('/home')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="getProfile">
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
        <CardContent sx={{ width: '100%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Paper
                item
                xs={12}
                sm={6}
                sx={{
                  backgroundColor: '#088395',
                  maxWidth: '500px',
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlignLast: 'center',
                  margin: '0 auto',
                  marginBottom: 4,
                  overflowY: 'scroll' ,
                }}
              >
                <CardHeader
                  title="User Profile"
                  sx={{ width: '100%', maxWidth: '500px' }}
                />
              </Paper>

              <Paper
                item
                xs={12}
                sm={6}
                sx={{ padding: 2, backgroundColor: '#088395', color: 'white' }}
              >
                <Typography variant="body1">
                  Name: {userProfile.name}
                </Typography>
                <Typography variant="body1">
                  Surname: {userProfile.surname}
                </Typography>
                <Typography variant="body1">
                  Username: {userProfile.username}
                </Typography>
                <Typography variant="body1">
                  Email: {userProfile.email}
                </Typography>
                <Typography variant="body1">
                  IdentityCard: {userProfile.identity_card}
                </Typography>
                <Typography variant="body1">
                  Registration date: {userProfile.createdAt}
                </Typography>

                <Typography variant="body1">
                  Role: {userProfile.role}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: '#0A4D68', marginBottom: 2 }}
                  onClick={handleOpenForm}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontSize: '0.875rem',
                      color: 'white',
                      borderRadius: 4,
                      fontWeight: 500,
                      lineHeight: 1.75,
                    }}
                    textAlign="center"
                  >
                    Change Password
                  </Typography>
                </Button>
                <Dialog open={showForm} onClose={handleCloseForm}>
                  <DialogTitle>Change Password</DialogTitle>
                  <DialogContent>
                    <TextField
                      label="New Password"
                      type="password"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    <TextField
                      label="Confirm New Password"
                      type="password"
                      variant="outlined"
                      margin="normal"
                      color={validateConfirmation ? 'success' : 'warning'}
                      fullWidth
                      value={confirmationPassword}
                      onChange={handleConfirmationPasswordChange}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseForm}>Cancel</Button>
                    <Button onClick={handleUpdatePassword}>Save</Button>
                  </DialogActions>
                </Dialog>
              </>

              <PopupState variant="popover" popupId="demo-popup-popover">
                {(popupState) => (
                  <div>
                    <Button
                      sx={{ backgroundColor: 'red' }}
                      variant="contained"
                      {...bindTrigger(popupState)}
                    >
                      Delete User Profile
                    </Button>
                    <Popover
                      {...bindPopover(popupState)}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                    >
                      <Typography sx={{ p: 2 }}>
                        "We are saddened that you want to leave. This action is
                        irreversible. Are you sure you want to delete your
                        profile and all your data?" "Remember that you will
                        always be welcome back."
                        <Button
                          sx={{
                            backgroundColor: 'red',
                            color: 'white',
                            marginLeft: 2,
                            '&:hover': { backgroundColor: 'red' },
                          }}
                          onClick={handleDeleteUser2}
                        >
                          <DeleteIcon sx={{ marginLeft: 2 }}></DeleteIcon> "yes,
                          I want to delete it"
                        </Button>
                      </Typography>
                    </Popover>
                  </div>
                )}
              </PopupState>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </div>
  )
}

export default UserProfilePage
