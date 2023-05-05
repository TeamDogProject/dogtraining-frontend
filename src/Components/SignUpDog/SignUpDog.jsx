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
        <Grid xs={8} md={12}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              width: '800px',
              backgroundColor: 'white',
              padding: 1,
              border: '2px #088395 solid',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <CardContent sx={{ marginLeft: 5 }}>
              <CardHeader title="Dog Registration Form"></CardHeader>
              <TextField
                sx={{ width: 500 }}
                label="Dog Name"
                variant="outlined"
                margin="dense"
                onChange={handleChangeDogName}
              />

              <TextField
                sx={{ marginLeft: 0, width: 500 }}
                label="Breed of dog"
                variant="outlined"
                margin="dense"
                onChange={handleChangeDogBreed}
              />

              <TextField
                sx={{ marginLeft: 0, width: 242 }}
                label="Age"
                variant="outlined"
                margin="dense"
                onChange={handleChangeDogAge}
              />

              <TextField
                sx={{ marginLeft: 2, width: 246 }}
                label="Chip Number"
                variant="outlined"
                margin="dense"
                onChange={handleChangeDogChip}
              />

              <TextField
                sx={{ width: 500 }}
                label="Describe your dog's behavior problems"
                variant="outlined"
                margin="dense"
                onChange={handleChangeDogProblem}
              />

              <Card
                color="primary"
                variant="outlined"
                sx={{
                  marginRight: 1,
                  padding: '0 5',
                  fontFamily: 'roboto',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  width: 500,
                }}
              >
                <Typography
                  color="text.secondary"
                  sx={{
                    paddingBottomg: 1,
                    marginLeft: 10,
                    right: 20,
                    paddingTop: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                  }}
                >
                  <label htmlFor="upload-photo">
                    Select a photo of your dog
                    <input id="upload-photo" type="file" accept="image/*" />
                  </label>
                </Typography>
              </Card>
            </CardContent>

            <CardActions
              sx={{ display: ' flex', justifyContent: 'flex-center' }}
            >
              <Button
                size="small"
                color="secondary"
                variant="contained"
                sx={{
                  backgroundColor: '#088395',
                  borderTop: 2,
                  marginLeft: 2,
                  marginRight: 3,
                }}
              >
                Register Dog
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </div>
    </>
  )
}

export default SignUpDog
