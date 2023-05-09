import {
  Card,
  CardHeader,
  TextField,
  IconButton,
  Divider,
  CardActions,
  CardContent,
  Button,
  Box,
  Container,
  Typography,
  Grid,
  FormControl,
  Select,
   MenuItem,
} from '@mui/material'
import {InputLabel } from '@mui/material'
import React, { useState } from 'react'
import './SignUpDog.css'
import { createdog } from '../../../services/userService/'
import { getProfile } from '../../../services/userService'

function SignUpDog() {  //Registo del Perro
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [breed, setBreed] = useState('')
  const [chip, setChip] = useState('')
  const [problem, setProblem] = useState('')
  const [sex, setSex] = useState('')
  const [userId, setUserId] = useState('')
  const [photo, setPhoto] = useState(null)

  const [isPassVisible, setIsPassVisible] = useState(false)

  const handlePhoto = (e) => {
    setPhoto(e.target.value)
  }

  const handleChangeSex = async (e) => {
    setSex(e.target.value)
   
  }

  const handleNewDog = async () => {

    const form = { photo, name, breed, age, sex, chip, problem, userId}
    const result2 = await getProfile() // Trae el perfil del Usuario con su Id
    setUserId(result2.id) //Guardo el UserId dentro de la variable de estado
    const result = await createdog(form) //Hace el Post al BackEnd con los datos del form.

    if (result) {
      console.log('Dog created')
    } else {
      console.log('Dog creation failed')
    }
  }

  const handlePass = (e) => {
    setIsPassVisible(!isPassVisible)
  }

  const handleChangeDogName = (e) => {
    setName(e.target.value)
  }

  const handleChangeDogBreed = (e) => {
    setBreed(e.target.value)
  }

  const handleChangeDogAge = (e) => {
    setAge(e.target.value)
  }
  const handleChangeDogChip = (e) => {
    setChip(e.target.value)
  }

  const handleChangeDogProblem = (e) => {
    setProblem(e.target.value)
  }

  return (
    <>
      <div className="containerSignUp">
        <Card
          xs={12}
          sm={6}
          md={12}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            overflowY: 'scroll',
            backgroundColor: 'white',
            padding: 1,
            border: '2px #088395 solid',
            justifyContent: 'center',
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'scroll',
            }}
            xs={12}
            sm={6}
            md={9}
          >
            <CardHeader title="Dog Registration Form"></CardHeader>
            <Grid item xs={12} sm={6} md={9}>
              <TextField
                sx={{ display: 'flex' }}
                label="Dog Name"
                variant="outlined"
                margin="dense"
                onChange={handleChangeDogName}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={9}>
              <TextField
                sx={{ marginLeft: 0, display: 'flex' }}
                label="Breed of dog"
                variant="outlined"
                margin="dense"
                onChange={handleChangeDogBreed}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={9}>
              <TextField
                sx={{ marginLeft: 0, display: 'flex', flexDirection: 'column' }}
                label="Age"
                variant="outlined"
                margin="dense"
                onChange={handleChangeDogAge}
              />
            </Grid>

           

            <Grid item xs={12} sm={6} md={9}>
              <TextField
                sx={{ display: 'flex', flexDirection: 'column' }}
                label="Chip Number"
                variant="outlined"
                margin="dense"
                onChange={handleChangeDogChip}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={9} >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">sex</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sex}
                label="sex"
                onChange={handleChangeSex}
              >
                <MenuItem value={'female'}>Female</MenuItem>
                <MenuItem value={'male'}>Male</MenuItem>
                
              </Select>
            </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={9}>
              <TextField
                md={9}
                sx={{ display: 'flex', flexDirection: 'column' }}
                label="Describe your dog's behavior problems"
                variant="outlined"
                margin="dense"
                onChange={handleChangeDogProblem}
              />
            </Grid>

            <Card
              item
              xs={12}
              sm={6}
              md={9}
              color="primary"
              variant="outlined"
              sx={{
                marginRight: 1,
                padding: '0 5',
                fontFamily: 'roboto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              <Grid item xs={12} sm={6} md={9}>
                <Typography
                  item
                  xs={12}
                  sm={6}
                  md={9}
                  color="text.secondary"
                  sx={{
                    paddingBottomg: 1,
                    marginLeft: 10,
                    right: 20,
                    paddingTop: 1,
                    display: 'flex',
                    flexDirection: 'colum',
                    justifyContent: 'start',
                  }}
                >
                  <label
                    htmlFor="upload-photo"
                    xs={12}
                    sm={6}
                    md={9}
                    className="uploadPhoto" 
                  >
                    Select a photo of your dog
                    <input 
                      onChange={handlePhoto}
                      id="upload-photo"
                      type="file"
                      accept="image/*"
                    />
                  </label>
                </Typography>
              </Grid>
            </Card>
          </CardContent>

          <CardActions sx={{ display: ' flex', justifyContent: 'flex-center' }}>
            <Grid xs={12} sm={6}>
              <Button
                onClick={handleNewDog}
                size="small"
                color="secondary"
                variant="contained"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#088395',
                  borderTop: 2,
                  marginLeft: 2,
                  marginRight: 3,
                }}
              >
                Register Dog
              </Button>
            </Grid>
          </CardActions>
        </Card>
      </div>
    </>
  )
}

export default SignUpDog
