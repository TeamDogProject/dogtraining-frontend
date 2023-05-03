import React from 'react'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import {createCourse} from '../../../../services/CourseService'
import { Box } from '@mui/material';
import {Typography} from '@mui/material';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function EditCourseForm({course}) {

    const [open, setOpen] = React.useState(false);
    const [courses, setCourses] = useState([]);
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [price, setPrice] = useState('');
    const [place, setPlace] = useState('');

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handlChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleChangeDuration = (e) => {
        setDuration(e.target.value)
    }

    const handleChangePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleChangePlace = (e) => {
        setPlace(e.target.value)
    }

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

      const handleSubmit = async (e) => {
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

     
    
    return(
    <div>
        <Button onClick={handleOpen} style={{ marginRight: 50,backgroundColor:'lightgray', border:'none',width:100, height:35, borderRadius:5, color:'black', fontSize:15, fontWeight:'bold', position:'absolute' }}>Edit</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ width:300, marginLeft:25 }}>
              Edit Course Form
            </Typography>
            <Typography id="modal-modal-description" sx={{ width:300, marginTop:4}}>
              <form onSubmit={handleSubmit}>
                <FormLabel sx={{ width:300, marginLeft:20 }}>Name</FormLabel>
                <TextField type="text" variant='outlined' value={course.name} onChange={handleChangeName} sx={{ width:300, marginLeft:20 }} />
                <FormLabel sx={{ width:300, marginLeft:20 }}>Description</FormLabel>
                <TextField type="text" variant='outlined' value={course.description} onChange={handlChangeDescription} sx={{ width:300, marginLeft:20 }} />
                <FormLabel sx={{ width:300, marginLeft:20 }}>Duration</FormLabel>
                <TextField type="text" variant='outlined' value={course.duration} onChange={handleChangeDuration} sx={{ width:300, marginLeft:20 }} />
                <FormLabel sx={{ width:300, marginLeft:20 }}>Price</FormLabel>
                <TextField type="text" variant='outlined' value={course.price} onChange={handleChangePrice} sx={{ width:300, marginLeft:20 }} />
                <InputLabel id="place">Place</InputLabel>
                <Select
                    labelId="place"
                    id="place"
                    value={place}
                    label="Place`"
                    onChange={handleChangePlace}
                >
                    <MenuItem value={'online'}>Online</MenuItem>
                    <MenuItem value={'face-to-face'}>Face-to-Face</MenuItem>
                </Select>
                <button type="submit" style={{ marginTop:15, marginLeft:340, backgroundColor:'purple', border:'none',width:120, height:35, borderRadius:5, color:'white', fontSize:15, fontWeight:'bold' }}>Save</button>
              </form>
            </Typography>
          </Box>
        </Modal>
    </div>
    )

}

export default EditCourseForm