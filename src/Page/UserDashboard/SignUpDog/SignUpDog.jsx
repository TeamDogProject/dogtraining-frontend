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
} from '@mui/material'
import React, { useState } from 'react'
import './SignUpDog.css'

function SignUpDog() {
  const [Dogname, seDogtName] = useState('')
  const [dogAge, setDogAge] = useState('')
  const [dogBreed, setDogBreed] = useState('')
  const [dogChip, setDogChip] = useState('')
  const [dogProblem, setDopProblem] = useState('')

  const [isPassVisible, setIsPassVisible] = useState(false)

  const handlePass = (e) => {
    setIsPassVisible(!isPassVisible)
  }

  const handleChangeDogName = (e) => {
    setDogName(e.target.value)
  }

  const handleChangeDogBreed = (e) => {
    setDogBreed(e.target.value)
  }

  const handleChangeDogAge = (e) => {
    setDogAge(e.target.value)
  }
  const handleChangeDogChip = (e) => {
    setDogChip(e.target.value)
  }

  const handleChangeDogProblem = (e) => {
    setDopProblem(e.target.value)
  }

  return (
    <>
      <div className="containerSignUp">
        
          <Card xs={12} sm={6} md={12}
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
         
           
            <CardContent sx={{ display: 'flex', flexDirection:'column', overflowY: 'scroll', }} xs={12} sm={6} md={9}>
              <CardHeader title="Dog Registration Form"></CardHeader>
              <Grid item xs={12} sm={6} md={9} >
              <TextField
                sx={{ display: 'flex'}}
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

              <Grid item xs={12} sm={6} md={9} >
              <TextField
                sx={{ marginLeft: 0, display: 'flex', flexDirection:'column'  }}
                label="Age"
                variant="outlined"
                margin="dense"
                onChange={handleChangeDogAge}
              />
              </Grid>

              <Grid item xs={12} sm={6} md={9}>
              <TextField
                sx={{display: 'flex', flexDirection:'column' }}
                label="Chip Number"
                variant="outlined"
                margin="dense"
                onChange={handleChangeDogChip}
              />
              </Grid>

              <Grid item xs={12} sm={6} md={9}>
              <TextField md={9}
                sx={{ display: 'flex', flexDirection:'column'}}
                label="Describe your dog's behavior problems"
                variant="outlined"
                margin="dense"
                onChange={handleChangeDogProblem}
              />
              </Grid>

             
              <Card  item xs={12} sm={6} md={9}
                color="primary"
                variant="outlined"
                sx={{
                  marginRight: 1,
                  padding: '0 5',
                  fontFamily: 'roboto',
                  display: 'flex', 
                  flexDirection:'column', 
                  justifyContent: 'flex-start',
                
                }}
              >
              <Grid item xs={12} sm={6} md={9}>
                <Typography item xs={12} sm={6} md={9}
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
               
                  <label htmlFor="upload-photo" xs={12} sm={6} md={9} className='uploadPhoto' >
                    Select a photo of your dog
                    <input id="upload-photo" type="file" accept="image/*" />
                  </label>
                </Typography>
                </Grid>
              </Card>
            </CardContent>

            <CardActions
              sx={{ display: ' flex', justifyContent: 'flex-center' }}
            >
            <Grid xs={12} sm={6}>
              <Button 
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
