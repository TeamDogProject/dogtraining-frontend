import { Card, CardHeader, TextField, IconButton, Divider, CardActions, CardContent, Button } from '@mui/material'
import { blue } from '@mui/material/colors'
import React, { useState } from 'react'
import { VisibilityOff, Lock, Visibility } from '@mui/icons-material'

function SignUpDog() {

    const [Dogname, seDogtName] = useState('')
    const [dogAge, setDogAge] = useState('')
    const [dogBreed, setDogBreed] = useState('')
    const [dogChip, setDogChip] = useState('')
    const [dogProblem, setDopProblem] = useState('')

    const [isPassVisible, setIsPassVisible] = useState(false)

  const handlePass = (e)=>{
        setIsPassVisible(!isPassVisible)
  }
 
     const handleChangeDogName = (e)=>{
        setDogName(e.target.value)
    }

    const handleChangeDogBreed = (e)=>{
        setDogBreed(e.target.value)
    }
     
    const handleChangeDogAge = (e)=>{
        setDogAge(e.target.value)
    }
    const handleChangeDogChip = (e)=>{
        setDogChip(e.target.value)
    }

    const handleChangeDogProblem = (e) =>{
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
            border:0
          }}
         
        >

        <CardContent>
          <CardHeader title="Dog Registration Form"></CardHeader>
          <TextField 
            sx={{width: 300 }}
            label="Dog Name"
            variant="outlined"
            margin="dense"
            onChange={handleChangeDogName}
          />
          <TextField
            sx={{ marginLeft: 2, width: 400  }}
            label="Breed of dog"
            variant="outlined"
            margin="dense"
            onChange={handleChangeDogBreed}
          />

          <TextField
            sx={{ marginLeft: 2 , width: 250}}
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
          sx={{  width: 600,  }}
          label="Describe your dog's behavior problems"
          variant="outlined"
          margin="dense"
          onChange={handleChangeDogProblem}
        />
           
           </CardContent>

           <Divider sx={{paddingTop:4 }} />

           <CardActions sx={{ display: ' flex', justifyContent: 'flex-center' }}>

           <Button
              size="small"
              color="secondary"
              variant="contained"
              sx={{ backgroundColor: '#088395', borderTop:2, marginLeft: 5 }}
            >
              Register User
            </Button>
           </CardActions>
        </Card>
      </div>
    </>
  )
}


export default SignUpDog
