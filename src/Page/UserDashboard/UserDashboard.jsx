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
  Link
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

  const handleDeleteDog = async(id) => { //función elimina perros
    try {
      setOnDeleteDog(true)
      setOnGetPackages(false)
      const data = await deleteDog(id)

      if (onDeleteDog === true) 
       location.reload() 
    
      alert('Dog deleted')     
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


  const getMyDogs = async () => { //función listado de perros usuario
    try {
      setMyDogs(true)
      setNewdog(false)
      setOnGetPackages(false)
      setOnVideos(false)

      const data = await getUserDogs()
      setOnDog(data)
      if (data.length < 1) alert('no dog found')
      return data
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <React.Fragment> 
      <Grid container spacing={0}>
        <Grid item xs={12} md={3}>
          <Box //Menu Buttons
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
                backgroundColor:'#088395',
                color:'white',
                border: 1,
                borderColor:'#0A4D68',
                margin: '0 auto',
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
              Get Packages
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
                xs={12}
                sm={6}
                md={9}
                sx={{
                  maxWidth: '800px',
                  margin: '0 auto',
                  flexWrap: 'wrap',
                  display: 'flex',
                }}
              >
                {newDog && <SignUpDog />}
              </Box>

              {onGetPackages && (
                <Paper //sección Packages
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    backgroundColor: 'white',
                    Width: '100%',
                    height: '100%',
                    color: 'white',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    textAlign: 'center',
                    margin: '0 auto',
                    marginBottom: 4,
                  }}
                >
                  <CardHeader
                    title="My Packages"
                    sx={{
                      width: '100%',
                      display: 'block',
                      margin: '0 auto',
                      color: '#088395',
                    }}
                  />
                  {onGetPackages.map((pack) => (
                    <Card
                      sx={{
                        marginLeft: 2,
                        marginRight: 2,
                        marginBottom: 4,
                        border: '2px solid #088395',
                        width: 300,
                      }}
                    >
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
                    
                    </Card>
                  ))}
                </Paper>
              )}

              {onVideos && (
                <Paper //Sección Videos
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    backgroundColor: 'white',
                    Width: '100%',
                    height: '100%',
                    color: 'white',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    textAlign: 'center',
                    margin: '0 auto',
                    marginBottom: 4,
                  }}
                >
                  <CardHeader
                    title="My videos"
                    sx={{
                      width: '100%',
                      display: 'block',
                      margin: '0 auto',
                      color: '#088395',
                    }}
                  />

                  {onVideos.map((category) => {
                    category.category_name
                  })}

                  {onVideos.map((category) =>
                    category.videos.map((video) => (
                      <Card
                        sx={{
                          marginLeft: 2,
                          marginRight: 2,
                          marginBottom: 4,

                          border: '2px solid #088395',
                        }}
                      >
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
                        ></Typography>
                        <b>Url: </b>

                        <Link href={video.url}>link to the video</Link>
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
                    backgroundColor: 'white',
                    Width: '100%',
                    height: '100%',
                    color: 'white',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    textAlign: 'center',
                    margin: '0 auto',
                    marginBottom: 4,
                  }}
                >
                  <CardHeader
                    title="User Dogs"
                    sx={{
                      width: '100%',
                      display: 'block',
                      margin: '0 auto',
                      color: '#088395',
                    }}
                  />

                  {onDog.map((dog) => (
                    <Card
                      sx={{
                        marginLeft: 2,
                        marginRight: 2,
                        marginBottom: 4,

                        border: '2px solid #088395',
                      }}
                    >
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
                        {dog.age}
                      </Typography>
                      <Typography sx={{ display: 'flex', marginLeft: 2 }}>
                        <b>Chip Number: </b> {dog.chip}
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
                        {dog.problem}
                      </Typography>
                      <Typography sx={{ display: 'flex', marginLeft: 2 }}>
                        <b>Trainer Assessment: </b>
                        {dog.valoration}
                      </Typography>
                      <Typography sx={{ display: 'flex', marginLeft: 2 }}>
                        <b>Creation Date:</b> {dog.createdAt}
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
