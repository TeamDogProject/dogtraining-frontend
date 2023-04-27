import { Card, CardHeader, TextField } from '@mui/material'
import { blue } from '@mui/material/colors'
import React, { useState } from 'react'

function Signup() {

    const [name, setName] = useState('')
    const [surname, setSurName] = useState('')
     const [userName, setUserName] = useState('')

     const handleChangeName = (e)=>{
        setName(e.target.value)
    }

    const handleChangeSurname = (e)=>{
        setSurName(e.target.value)
    }
     
    const handleChangeUserName = (e)=>{
        setUserName(e.target.value)
    }


  return (
    <>
      <div className="containerSignUp">
        <Card
          sx={{
            height: '80vh',
            width: '100vw',
            backgroundColor: 'white',
            padding: 1,
          }}
          raised={true}
        >
          <CardHeader title="Registration Form"></CardHeader>
          <TextField
            label="Name"
            variant="outlined"
            margin="dense"
            onChange={handleChangeName}
          />
          <TextField
            sx={{ marginLeft: 2 }}
            label="Surname"
            variant="outlined"
            margin="dense"
            onChange={handleChangeSurname}
          />

          <TextField
            sx={{ marginLeft: 2 }}
            label="UserName"
            variant="outlined"
            margin="dense"
            onChange={handleChangeUserName}
          />
        </Card>
      </div>
    </>
  )
}

export default Signup