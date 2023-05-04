import React, { useState, useEffect } from 'react'
import api from '../../services/config'
import { getProfile } from '../../services/userService'
import { deleteUser } from '../../services/userService'
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  Typography,
  Button,
} from '@mui/material'
import './UserProfile.css'
import DeleteIcon from '@mui/icons-material/Delete'
import Popover from '@mui/material/Popover'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state'

function UserProfilePage() {
  const [userProfile, setUserProfile] = useState('')
  const [userToDelete, setUserToDelete] = useState('')

  useEffect(() => {
    fetchUserProfile()
  }, [])

  const fetchUserProfile = async () => {
    const result = await getProfile()
    setUserProfile(result)
    console.log(result)
  }



  useEffect(() => {
    handleDeleteUser()
  }, [])


  const handleDeleteUser = async () => {
    try {
      const { data } = await api.delete('/users/profile', {
        headers: {
          'token': localStorage.getItem('token')
        }
      })
      setUserToDelete(data)
      console.log(data)
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
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                sx={{ backgroundColor: '#0A4D68', marginBottom: 2 }}
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
                          onClick={handleDeleteUser}
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
