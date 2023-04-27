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
} from '@mui/material'
import React, { useState } from 'react'
import PetsIcon from '@mui/icons-material/Pets'

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
        <Card
          sx={{
            height: '400px',
            width: '100vw',
            backgroundColor: 'white',
            padding: 1,
            border: 0,
          }}
        >
          <CardContent>
            <CardHeader title="Dog Registration Form"></CardHeader>
            <TextField
              sx={{ width: 300 }}
              label="Dog Name"
              variant="outlined"
              margin="dense"
              onChange={handleChangeDogName}
            />

            <TextField
              sx={{ marginLeft: 2, width: 400 }}
              label="Breed of dog"
              variant="outlined"
              margin="dense"
              onChange={handleChangeDogBreed}
            />

            <TextField
              sx={{ marginLeft: 2, width: 250 }}
              label="Age"
              variant="outlined"
              margin="dense"
              onChange={handleChangeDogAge}
            />

            <TextField
              sx={{ marginLeft: 2 }}
              label="Chip Number"
              variant="outlined"
              margin="dense"
              onChange={handleChangeDogChip}
            />

            <TextField
              sx={{ width: '84vw' }}
              label="Describe your dog's behavior problems"
              variant="outlined"
              margin="dense"
              onChange={handleChangeDogProblem}
            />

            <Card color='primary' variant="outlined" sx={{marginRight:1, padding: 1, fontFamily: 'roboto', display:'flex', justifyContent: 'flex-start', width:400 }}>
            <Typography  color="text.secondary" sx={{paddingBottom:1,right:20, paddingTop:1 , display:'flex', flexDirection: 'row'}}>
            <label htmlFor="upload-photo">
            
            Select a photo of your dog
            
            <input id="upload-photo" type="file" accept="image/*" />

            </label>
            </Typography>
            </Card>
            
            


          </CardContent>

          <Divider sx={{ paddingTop: 4 }} />

          <CardActions sx={{ display: ' flex', justifyContent: 'flex-center' }}>
            <Button
              size="small"
              color="secondary"
              variant="contained"
              sx={{ backgroundColor: '#088395', borderTop: 2, marginLeft: 5 }}
            >
              Register Dog
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  )
}

export default SignUpDog
