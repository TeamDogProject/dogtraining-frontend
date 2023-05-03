import React from 'react'
import { Button, Select } from '@mui/material'
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import { createCourse } from '../../../../services/CourseService';
import {FormLabel} from '@mui/material';
import { useState } from 'react';
import { listAllCourses } from '../../../../services/CourseService';
import { useEffect } from 'react';
import {InputLabel} from '@mui/material';
import {MenuItem} from '@mui/material';

function CreateCourseForm() {

  const [open, setOpen] = React.useState(false);
  const [ courses, setCourses ] = useState([]);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName ] = useState('');
  const [description, setDescripion ] = useState('');
  const [duration, setDuration ] = useState('');
  const [price, setPrice ] = useState('');
  const [place, setPlace ] = useState('');

  const handleChangeName = () => {
    setName(e.target.value)
  }

  const handleChangeDescription = () => {
    setDescripion(e.target.value)
  }

  const handleChangeDuration = () => {
    setDuration(e.target.value)
  }

  const handleChangePrice = () => {
    setPrice(e.target.value)
  }

  const handleChangePlace = () => {
    setPlace(e.target.value)
  }

  const getCourses = async () => {
    const result = await listAllCourses();
    setCourses(result)
};

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  useEffect(()=> {
    getCourses();
}, []);

const handleSubtmit = async (e) => {
  e.preventDefault();
  const createNewCourse = {
    name: name, 
    description: description,
    duration: duration, 
    price: price, 
    place: place
  };
  await createCourse(createNewCourse);
  setCourses(getCourses())
}

  return (
    <div>
        <Button onClick={handleOpen} style={{ marginLeft:5, backgroundColor:'green', border:'none',width:135, height:35, borderRadius:5, color:'white', fontSize:15, fontWeight:'bold' }}>New Course</Button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ width:300, marginLeft:25 }}>
                              Create Course Form
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ width:300, marginTop:4}}>
                              <form onSubmit={handleSubtmit}>
                                <FormLabel sx={{ width:300, marginLeft:20 }}>Name</FormLabel>
                                <TextField type="text" variant='outlined' value={name} onChange={handleChangeName} sx={{ width:300, marginLeft:20 }} />
                                <FormLabel sx={{ width:300, marginLeft:20 }}>Description</FormLabel>
                                <TextField type="text" variant='outlined' value={description} onChange={handleChangeDescription} sx={{ width:300, marginLeft:20 }} />
                                <FormLabel sx={{ width:300, marginLeft:20 }}>Duration</FormLabel>
                                <TextField type="text" variant='outlined' value={duration} onChange={handleChangeDuration} sx={{ width:300, marginLeft:20 }} />
                                <FormLabel sx={{ width:300, marginLeft:20 }}>Price</FormLabel>
                                <TextField type="text" variant='outlined' value={price} onChange={handleChangePrice} sx={{ width:300, marginLeft:20 }} />
                                <InputLabel id="place">Place</InputLabel>
                                <Select
                                    labelId="place"
                                    id="demo-simple-select"
                                    value={place}
                                    label="Place"
                                    onChange={handleChangePlace}
                                >
                                    <MenuItem value={'online'}>Online</MenuItem>
                                    <MenuItem value={'face-to-face'}>Face-to-Face</MenuItem>
                                </Select>
                                <button type="submit" style={{ marginTop:15, marginLeft:340, backgroundColor:'purple', border:'none',width:120, height:35, borderRadius:5, color:'white', fontSize:15, fontWeight:'bold' }}>Send</button>
                              </form>
                            </Typography>
                          </Box>
                        </Modal>
    </div>
  )
}

export default CreateCourseForm