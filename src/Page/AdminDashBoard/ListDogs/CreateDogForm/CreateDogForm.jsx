import React from 'react'
import { Button, Select } from '@mui/material'
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import { createDog } from '../../../../services/DogService';
import {FormLabel} from '@mui/material';
import { useState } from 'react';
import { listAllDogs } from '../../../../services/DogService';
import { useEffect } from 'react';
import {InputLabel} from '@mui/material';
import {MenuItem} from '@mui/material';

function CreateDogForm() {

  const [open, setOpen] = React.useState(false);

  const [ photo, setPhoto ] = useState('');
  const [ name, setName ]= useState('');
  const [ breed, setBreed ]= useState('');
  const [ age, setAge ] = useState('');
  const [ sex, setSex ] = useState('');
  const [ chip, setChip ] = useState('');
  const [ problem, setProblem ] = useState('');
  const [ valoration, setValoration ] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [dogs, setDogs ] = useState([]);


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

  const handleChangeSex = (e) => {
    setSex(e.target.value)
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

  const getDogs = async () => {
    const result = await listAllDogs();
    setDogs(result)
  };

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
    height:600,
    p: 4,
  };

  useEffect(()=> {
    getDogs();
}, []);

    const handleSubtmit = async (e) => {
        e.preventDefault();
        const createNewDog = {
        photo: photo,
        name: name, 
        breed: breed,
        age: age,
        sex: sex,
        chip: chip,
        problem: problem,  
        valoration: valoration
        };
        await createDog(createNewDog);
        setDogs(getDogs())
  }

  return (
    <div>
        <Button onClick={handleOpen} style={{ marginLeft:5, backgroundColor:'green', border:'none',width:135, height:35, borderRadius:5, color:'white', fontSize:15, fontWeight:'bold' }}>New Dog</Button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ width:300, marginLeft:45 }}>
                              Create Dog Form
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ width:300, marginTop:4}}>
                              <form onSubmit={handleSubtmit}>
                              <FormLabel sx={{ width:300, marginLeft:35 }}>Photo</FormLabel>
                                <TextField type="text" variant='outlined' value={photo} onChange={handleChangePhoto} sx={{ width:300, marginLeft:35 }} />
                                <FormLabel sx={{ width:300, marginLeft:35 }}>Name</FormLabel>
                                <TextField type="text" variant='outlined' value={name} onChange={handleChangeName} sx={{ width:300, marginLeft:35 }} />
                                <FormLabel sx={{ width:300, marginLeft:35 }}>Breed</FormLabel>
                                <TextField type="text" variant='outlined' value={breed} onChange={handleChangeBreed} sx={{ width:300, marginLeft:35 }} />
                                <FormLabel sx={{ width:300, marginLeft:35 }}>Duration</FormLabel>
                                <TextField type="text" variant='outlined' value={age} onChange={handleChangeAge} sx={{ width:300, marginLeft:35 }} />
                                <InputLabel id="sex" sx={{ width:300, marginLeft:35 }}>Sex</InputLabel>
                                <Select
                                    labelId="sex"
                                    id="sex"
                                    value={sex}
                                    label="Place"
                                    onChange={handleChangeSex}
                                    sx={{ width:300, marginLeft:35  }}
                                >
                                    <MenuItem value={'online'}>Online</MenuItem>
                                    <MenuItem value={'face-to-face'}>Face-to-Face</MenuItem>
                                </Select>
                                <FormLabel sx={{ width:300, marginLeft:35 }}>Chip</FormLabel>
                                <TextField type="text" variant='outlined' value={chip} onChange={handleChangeChip} sx={{ width:300, marginLeft:35 }} />
                                <FormLabel sx={{ width:300, marginLeft:35 }}>Problem</FormLabel>
                                <TextField type="text" variant='outlined' value={problem} onChange={handleChangeProblem} sx={{ width:300, marginLeft:35 }} />
                                <FormLabel sx={{ width:300, marginLeft:35 }}>Valoration</FormLabel>
                                <TextField type="text" variant='outlined' value={valoration} onChange={handleChangeValoration} sx={{ width:300, marginLeft:35 }} />
                                <button type="submit" style={{ marginTop:15, marginLeft:460, backgroundColor:'purple', border:'none',width:120, height:35, borderRadius:5, color:'white', fontSize:15, fontWeight:'bold' }}>Send</button>
                              </form>
                            </Typography>
                          </Box>
                        </Modal>
    </div>

  )
}

export default CreateDogForm