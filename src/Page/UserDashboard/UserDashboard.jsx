import React, { useState, useEffect } from 'react'
import SignUpDog from './SignUpDog/SignUpDog'
import Iframe from 'react-iframe'
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

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Limpia el listener del evento resize al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { width } = windowSize;



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

  const handleDeleteDog = async (id) => {
    //función elimina perros
    try {
      setOnDeleteDog(true)
      setOnGetPackages(false)
      const data = await deleteDog(id)

      if (onDeleteDog === true) window.location.reload()
      await getMyDogs()

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

  const getMyDogs = async () => {
    //User Dogs List
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
              height: { xs: 'auto', md: '100%' },
              margin: '0 auto',
              backgroundColor: '#0A4D68',
              padding: '1%',
              border: '2px #088395 solid',
              minHeight: { xs: 'auto', md: '1000px' },
              paddingTop: '40px',
              paddingBottom: '40px',
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
              Courses Packages
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
                md={9}
                sx={{
                  Width: '800px',
                  margin: '0 auto',
                  flexWrap: 'wrap',
                  display: 'flex',
                  marginTop: '40px',
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
                    boxShadow: 0,
                    border: 0,
                    width: '100%',
                    height: '100%',
                    color: 'white',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    textAlign: 'center',
                    margin: '0 auto',
                  }}
                >
                  <CardHeader
                    title="Courses Packages"
                    sx={{
                      width: '600px',
                      display: 'block',
                      margin: '0 auto',
                      color: '#088395',
                    }}
                  />
                  {onGetPackages.map((pack, idx) => (
                    <Card
                      key={idx}
                      sx={{
                        marginLeft: 2,
                        marginRight: 2,
                        marginBottom: 4,
                        border: '2px solid #088395',
                        width: 800,
                      }}
                    >
                      <Typography
                        sx={{
                          display: 'flex',
                          marginLeft: 2,
                          textAlign: 'left',
                        }}
                      >
                        <b>Package Name: </b>
                        {pack.name}
                      </Typography>

                      <Typography sx={{ marginLeft: 2, textAlign: 'left' }}>
                        <b>Description:</b> {pack.description}
                      </Typography>

                      <Typography sx={{ display: 'flex', marginLeft: 2 }}>
                        <b>Duration:</b>
                        {pack.duration}
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
                    width: '100%',
                    color: 'white',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    textAlign: 'center',
                    alignContent: 'flex-start',
                    margin: '0 auto',
                    marginBottom: '20px',
                    boxShadow: 0,
                    border: 0,
                    height: 'auto'
                  }}
                >
                  <CardHeader
                    title="My videos"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      margin: '0 auto',
                      color: '#088395',
                      boxShadow: 0,
                      border: 0,
                    }}
                  />

                  {onVideos.map((category) => {
                    category.category_name
                  })}

                  {onVideos.map((category) =>
                    category.videos.map((video, idx) => (
                      <Card
                        key={idx}
                        sx={{
                        
                          marginLeft: 2,
                          marginRight: 2,
                          marginBottom: 4,
                          width:'360px',
                          height: 'auto',
                          border: '2px solid #088395',
                          textAlign: 'start',
                          paddingLeft: '10px',
                        }}
                      >
                        
                        <Typography
                          variant="body1"
                          sx={{ display: 'flex', marginLeft: 5 }}
                        >
                          <Typography sx={{ fontWeight:'bold' }}> Title: </Typography>
                          {video.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ display: 'flex', marginLeft: 5 }}
                        ></Typography>
                        <Typography 
                          sx={{
                            fontWeight: 'bold',
                            display: 'inline-flex',
                            margin: '0 auto',
                            alignContent: 'center', 
                            justifyContent: 'center'
                          }}
                        > 
                        </Typography>
                         <Grid  item xs={12} sm={6} >
                        <iframe 
                          style={{
                            width: width >= 600 ? '560px' : '100%',
                            height: width >= 600 ? '315px' : '100%',
                          }}
                        
                       width="560" height="315" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Grid>
                       

                        
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
                    boxShadow: 0,
                    border: 0,
                    Width: '100%',
                    height: '100%',
                    color: 'red',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    textAlign: 'center',
                    margin: '0 auto',
                    marginBottom: 0,
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

                  {onDog.map((dog, idx) => (
                    <Card
                      key={idx}
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
