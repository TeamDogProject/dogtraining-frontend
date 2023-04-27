import { Card, CardHeader, TextField } from '@mui/material'
import { blue } from '@mui/material/colors'
import React, { useState } from 'react'

function Signup() {

    const [name, setName] = useState('')

     const handleChangeName = (e)=>{
        setName(e.targe.value)
    }
     


  return (
    <>
      <div className="containerSignUp">
        <Card sx={{height:'80vh' , width: '100vw', backgroundColor: 'white' }} raised={true}>
          <CardHeader title="Registration Form"></CardHeader>
          <TextField
            label="Name"
            variant="outlined"
            margin='dense'
            onChange={handleChangeName}
            
          ></TextField>
        </Card>
      </div>
    </>
  )
}

export default Signup