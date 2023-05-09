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
  Divider,
} from '@mui/material'
import { getUserDogs } from '../../services/userService'
import { deleteDog } from '../../services/userService'
import { getMyPackages } from '../../services/userService'
import { getVideos } from '../../services/userService'

function UserDashboard() {
  const [newDog, setNewdog] = useState(false)
  const [myDogs, setMyDogs] = useState(null)
  const [onDog, setOnDog] = useState([])
  const [onDeleteDog, setOnDeleteDog] = useState(false)
  const [onGetPackages, setOnGetPackages] = useState(false)
  const [onVideos, setOnVideos] = useState(false)


  const handlerCategories = async () => {
    setNewdog(false)
    setMyDogs(false)
    setOnGetPackages(false)
    setMyDogs(false)
    const data = await getVideos()
    setOnVideos(data)
  }

  const handleGetPackages = async () => {
    setNewdog(false)
    setMyDogs(false)
    setOnVideos(false)

    const { data } = await getMyPackages()
    setOnGetPackages(data)
  }

  const handleDeleteDog = (id) => {
    try {
      setOnDeleteDog(true)
      setOnGetPackages(false)
      deleteDog(id)
      location.reload()

      if (onDeleteDog === true) console.log('Dog deleted')
    } catch (error) {
      console.error(error)
    }
  }

  const createDogForm = (e) => {
    setNewdog(true)
    setMyDogs(false)
    setOnGetPackages(false)
    setOnVideos(false)
  }

  const getMyDogs = async () => {
    try {
      setMyDogs(true)
      setNewdog(false)
      setOnGetPackages(false)
      setOnVideos(false)

      const data = await getUserDogs()
      setOnDog(data)
      if (data.length < 1) alert('no dog found')

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
              height: { xs: 'auto', md: '100vh' },
              margin: '0 auto',
              backgroundColor: '#0A4D68',
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
                console,
              }}
              onClick={createDogForm}
            >
              Create new dog
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
              Get my dogs
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
              onClick={handleGetPackages}
            >
              GetPackages
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
              onClick={handlerCategories}
            >
              Categories Videos
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={9}>
          <Box>
            <>
              <Box
                item
                xs={12}
                sm={6}
                sx={{ maxWidth: '500px', margin: '0 auto' }}
              >
                {newDog && <SignUpDog />}
              </Box>

              {onGetPackages && (
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
                    title="My Packages"
                    sx={{ width: '100%', maxWidth: '500px' }}
                  />
                  {onGetPackages.map((pack) => (
                    <Card>
                      <Typography
                        variant="body1"
                        key={pack.id}
                        sx={{ display: 'flex', marginLeft: 2 }}
                      >
                        <b> Package Name: </b>
                        {pack.name}
                      </Typography>

                      <Typography sx={{ display: 'flex', marginLeft: 2 }}>
                        <b>Package Descriotion:</b> {pack.description}
                      </Typography>

                      <Typography sx={{ display: 'flex', marginLeft: 2 }}>
                        <b>Duration:</b> {pack.duration}min.
                      </Typography>
                      <Typography sx={{ display: 'flex', marginLeft: 2 }}>
                        <b>Price:</b> {pack.price}€
                      </Typography>
                      <Typography sx={{ display: 'flex', marginLeft: 2 }}>
                        <b>Place:</b> {pack.place}
                      </Typography>
                      <Divider
                        sx={{
                          border: 3,
                          borderColor: '#0A4D68',
                          margin: '0 auto',
                        }}
                      ></Divider>
                    </Card>
                  ))}
                </Paper>
              )}

              {onVideos && (
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
                    title="My dogs"
                    sx={{ width: '100%', maxWidth: '500px' }}
                  />

                  {onVideos.map((category) => {
                    category.category_name
                  })}

                  {onVideos.map((category) =>
                    category.videos.map((video) => (
                      <Card>
                        <Typography
                          variant="body1"
                          key={video.id}
                          sx={{ display: 'flex', marginLeft: 5 }}
                        >
                          <b> Title: </b>
                          {video.title}
                        </Typography>

                        <Typography
                          variant="body1"
                          key={video.id}
                          sx={{ display: 'flex', marginLeft: 5 }}
                        >
                          <b>Url: </b>
                          {video.url}
                        </Typography>
                      </Card>
                    ))
                  )}
                </Paper>
              )}

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
                        <b>Breed:</b> {dog.breed}
                      </Typography>
                      <Typography sx={{ display: 'flex', marginLeft: 2 }}>
                        <b>Dog Sex:</b> {dog.sex}
                      </Typography>
                      <Typography sx={{ display: 'flex', marginLeft: 2 }}>
                        <b>Dog Age:</b> {dog.age}
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

                      <Button
                        sx={{
                          color: 'white',
                          border: 1,
                          borderColor: 'red',
                          backgroundColor: 'red',
                          marginTop: 2,
                          marginBottom: 2,
                        }}
                        onClick={() => handleDeleteDog(dog.id)}
                      >
                        Delete Dog
                      </Button>
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
