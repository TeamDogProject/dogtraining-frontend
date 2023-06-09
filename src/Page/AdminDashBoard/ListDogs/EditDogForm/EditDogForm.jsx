import React from 'react'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { saveDog } from '../../../../services/DogService'

function EditDogForm({ show, close, dogId, dogPhoto, dogName, dogBreed, dogAge, dogSex, dogChip, dogProblem, dogValoration }) {

  const [dog_photo, setPhoto] = useState(dogPhoto)
  const [dog_name, setName] = useState(dogName)
  const [dog_breed, setBreed] = useState(dogBreed)
  const [dog_age, setAge] = useState(dogAge)
  const [dog_sex, setSex] = useState(dogSex)
  const [dog_chip, setChip] = useState(dogChip)
  const [dog_problem, setProblem] = useState(dogProblem)
  const [dog_valoration, setValoration] = useState(dogValoration)

 const handleClose = () => {
   close()
 }

  const handleChangeSex = (event) => {
    setSex(event.target.value);
  };

  const handleChangePhoto = (e) => {
    setPhoto(e.target.value)
  }

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeBreed = (e) => {
    setBreed(e.target.value)
  }

  const handleChangeAge = (e) => {
    setAge(e.target.value)
  }

  const handleChangeChip = (e) => {
    setChip(e.target.value)
  }

  const handleChangeProblem = (e) => {
    setProblem(e.target.value)
  }

  const handleChangeValoration = (e) => {
    setValoration(e.target.value)
  }

  const handleSaveDog = async (e) => {
    console.log(dogId)
    e.preventDefault();
    try {
      const obj={}
      if(dog_name){
        obj.name=dog_name;
      }
      if(dog_photo){
        obj.photo = dog_photo;
      }
      if (dog_breed) {
        obj.breed = dog_photo
      }
      if(dog_age){
        obj.age = dog_age
      }
      if (dog_sex) {
        obj.sex = dog_sex
      }
      if (dog_chip) {
        obj.chip = dog_chip
      }
      if (dog_problem) {
        obj.problem = dog_problem
      }
      if (dog_valoration) {
        obj.valoration = dog_valoration
      }
      await saveDog(
        dogId,
        obj
      )
      handleClose();
    } catch (error) {
      console.log(error)
    }
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    overflow: 'scroll',
    height: 600,
    display: 'block',
    p: 4,
  };

  return (
    <div>
      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ width: 300, marginLeft: 45 }}>
            Edit Dog Form
          </Typography>
          <Typography id="modal-modal-description" sx={{ width: 300, marginTop: 4 }}>
            <form onSubmit={handleSaveDog}>
              <FormLabel sx={{ width: 300, marginLeft: 35 }}>Photo</FormLabel>
              <TextField type="text" variant='outlined'  placeholder={dogPhoto} onChange={handleChangePhoto} sx={{ width: 300, marginLeft: 35 }} />
              <FormLabel sx={{ width: 300, marginLeft: 35 }}>Name</FormLabel>
              <TextField type="text" variant='outlined' placeholder={dogName} onChange={handleChangeName} sx={{ width: 300, marginLeft: 35 }} />
              <FormLabel sx={{ width: 300, marginLeft: 35 }}>Breed</FormLabel>
              <TextField type="text" variant='outlined' placeholder={dogBreed} onChange={handleChangeBreed} sx={{ width: 300, marginLeft: 35 }} />
              <FormLabel sx={{ width: 300, marginLeft: 35 }}>Age</FormLabel>
              <TextField type="text" variant='outlined' placeholder={dogAge} onChange={handleChangeAge} sx={{ width: 300, marginLeft: 35 }} />
              <InputLabel id="sex" sx={{ width: 300, marginLeft: 35 }}>Sex</InputLabel>
              <Select
                labelId="sex"
                id="sex"
                placeholder={dogSex}
                label="Sex"
                onChange={handleChangeSex}
                sx={{ width: 300, marginLeft: 35 }}
              >
                <MenuItem value={'male'}>Male</MenuItem>
                <MenuItem value={'female'}>Female</MenuItem>
              </Select>
              <FormLabel sx={{ width: 300, marginLeft: 35 }}>Chip</FormLabel>
              <TextField type="text" variant='outlined' placeholder={dogChip} onChange={handleChangeChip} sx={{ width: 300, marginLeft: 35 }} />
              <FormLabel sx={{ width: 300, marginLeft: 35 }}>Problem</FormLabel>
              <TextField type="text" variant='outlined' placeholder={dogProblem} onChange={handleChangeProblem} sx={{ width: 300, marginLeft: 35 }} />
              <FormLabel sx={{ width: 300, marginLeft: 35 }}>Valoration</FormLabel>
              <TextField type="text" variant='outlined' placeholder={dogValoration} onChange={handleChangeValoration} sx={{ width: 300, marginLeft: 35 }} />
              <Button variant="contained" type="submit" style={{ marginTop: 15, marginLeft: 510, color:'white', backgroundColor:'purple' }}>
                Save
              </Button> 
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}


export default EditDogForm