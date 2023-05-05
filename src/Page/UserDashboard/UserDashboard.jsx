import React, { useState } from 'react'
import SignUpDog from './SignUpDog/SignUpDog'
import { Grid, Box, Button, Paper, CardHeader, Typography, Card } from '@mui/material'
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
        <Grid item xs={3}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
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

        <Grid item xs={9}>
          <Box>
            <>
              {newDog && <SignUpDog />}

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

                    <Card >

                    <Typography variant="body1" key={dog.id}  sx={{display: 'flex', marginLeft:2, }}>
                     Dog Name: {dog.name} 
                     </Typography>
                     <Typography  sx={{display: 'flex', marginLeft:2,}}>Dog Age: {dog.age} </Typography>

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
