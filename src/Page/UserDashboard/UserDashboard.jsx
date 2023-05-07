import React, { useState } from 'react'
import SignUpDog from './SignUpDog/SignUpDog'
import {
  Grid,
  Box,
  Button,
  Paper,
  CardHeader,
  Typography,
  Card,
} from '@mui/material'
import { getUserDogs } from '../../services/userService'

function UserDashboard() {
  const [newDog, setNewdog] = useState(false)
  const [myDogs, setMyDogs] = useState(null)
  const [onDog, setOnDog] = useState([])

  const createDogForm = (e) => {
    setNewdog(true)
    setMyDogs(false)
  }

  const getMyDogs = async () => {
    try {
      setMyDogs(true)
      setNewdog(false)

      const data = await getUserDogs()
      setOnDog(data)

      console.log(data)
      return data
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',

              margin: '0 auto',
              backgroundColor: 'white',
              padding: '1%',
              border: '2px #088395 solid',
            }}
          >
            <Button
              sx={{
                width: 150,
                display: 'flex',
                backgroundColor: '#088395',
                color: 'white',
                border: 1,
                borderColor: '#0A4D68',
                margin: '0 auto',
              }}
              onClick={createDogForm}
            >
              Create new dog{' '}
            </Button>
            <Button
              sx={{
                width: 150,
                display: 'flex',
                backgroundColor: '#088395',
                color: 'white',
                border: 1,
                borderColor: '#0A4D68',
                margin: '0 auto',
              }}
              onClick={getMyDogs}
            >
              Get my dogs{' '}
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={9}>
          <Box>
            <>
              
                <Box  item
                xs={12}
                sm={6} sx={{ maxWidth: '500px', margin: '0 auto' }}>
                  {newDog && <SignUpDog />}
                </Box>

              {myDogs && (
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

                  {onDog.map((dog) => (
                    <Card>
                      <Typography
                        variant="body1"
                        key={dog.id}
                        sx={{ display: 'flex', marginLeft: 2 }}
                      >
                        <b> Dog Name: </b>
                        {dog.name}
                      </Typography>
                      <Typography sx={{ display: 'flex', marginLeft: 2 }}>
                        <b>Dog Age: </b>
                        {dog.age}{' '}
                      </Typography>
                      <Typography sx={{ display: 'flex', marginLeft: 2 }}>
                        <b>Chip Number: </b> {dog.chip}{' '}
                      </Typography>
                      <Typography sx={{ display: 'flex', marginLeft: 2 }}>
                        <b>Breed: {dog.breed} </b>
                      </Typography>
                      <Typography sx={{ display: 'flex', marginLeft: 2 }}>
                        <b>Dog Sex: {dog.sex} </b>
                      </Typography>
                      <Typography sx={{ display: 'flex', marginLeft: 2 }}>
                        <b>Dog Age: {dog.age} </b>
                      </Typography>
                      <Typography sx={{ display: 'flex', marginLeft: 2 }}>
                        <b>Behavior Problem: </b>
                        {dog.problem}{' '}
                      </Typography>
                      <Typography sx={{ display: 'flex', marginLeft: 2 }}>
                        <b>Trainer Assessment: </b>
                        {dog.valoration}{' '}
                      </Typography>
                      <Typography sx={{ display: 'flex', marginLeft: 2 }}>
                        <b>Creation Date:</b> {dog.createdAt}{' '}
                      </Typography>
                    </Card>
                  ))}
                </Paper>
              )}
            </>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default UserDashboard
