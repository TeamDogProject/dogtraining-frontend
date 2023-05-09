import React from 'react'
import { Button, Select } from '@mui/material'
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import { createCourse } from '../../../../services/CourseService';
import {FormLabel} from '@mui/material';
import { useState, useCallback } from 'react';
import { listAllCourses } from '../../../../services/CourseService';
import { useEffect } from 'react';
import {InputLabel} from '@mui/material';
import {MenuItem} from '@mui/material';

function CreateCourseForm() {

  const [open, setOpen] = useState(false);
  const [ courses, setCourses ] = useState([]);
  
  const handleOpen = () => setOpen(true);
  const handleClose = async (e) => {
    await handleSubtmit(e)
    setOpen(false);
  }

  const [course_name, setCourseName ] = useState('');
  const [course_description, setCourseDescription ] = useState('');
  const [course_duration, setCourseDuration ] = useState('');
  const [course_price, setCoursePrice ] = useState('');
  const [course_place, setCoursePlace ] = useState('');

  const handleChangeCourseName = (e) => {
    setCourseName(e.target.value)
  }

  const handleChangeCourseDescription = (e) => {
    setCourseDescription(e.target.value)
  }

  const handleChangeCourseDuration = (e) => {
    setCourseDuration(e.target.value)
  }

  const handleChangeCoursePrice = (e) => {
    setCoursePrice(e.target.value)
  }

  const handleChangeCoursePlace = (e) => {
    setCoursePlace(e.target.value)
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
    name: course_name, 
    description: course_description,
    duration: course_duration, 
    price: course_price, 
    place: course_place
  };
  await createCourse(createNewCourse);
  //setCourses(getCourses())
}

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          marginLeft: 5,
          backgroundColor: 'green',
          border: 'none',
          width: 135,
          height: 35,
          borderRadius: 5,
          color: 'white',
          fontSize: 15,
          fontWeight: 'bold',
        }}
      >
        New Package
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ width: 300, marginLeft: 25 }}
          ></Typography>
          <Typography
            id="modal-modal-description"
            sx={{ width: 300, marginTop: 4 }}
          >
            <form /* onSubmit={handleSubtmit} */>
              <FormLabel sx={{ width: 300, marginLeft: 20 }}>Name</FormLabel>
              <TextField
                type="text"
                variant="outlined"
                value={course_name}
                onChange={handleChangeCourseName}
                sx={{ width: 300, marginLeft: 20 }}
              />
              <FormLabel sx={{ width: 300, marginLeft: 20 }}>
                Description
              </FormLabel>
              <TextField
                type="text"
                variant="outlined"
                value={course_description}
                onChange={handleChangeCourseDescription}
                sx={{ width: 300, marginLeft: 20 }}
              />
              <FormLabel sx={{ width: 300, marginLeft: 20 }}>
                Duration
              </FormLabel>
              <TextField
                type="text"
                variant="outlined"
                value={course_duration}
                onChange={handleChangeCourseDuration}
                sx={{ width: 300, marginLeft: 20 }}
              />
              <FormLabel sx={{ width: 300, marginLeft: 20 }}>Price</FormLabel>
              <TextField
                type="text"
                variant="outlined"
                value={course_price}
                onChange={handleChangeCoursePrice}
                sx={{ width: 300, marginLeft: 20 }}
              />
              <InputLabel id="place" sx={{ width: 300, marginLeft: 20 }}>
                Place
              </InputLabel>
              <Select
                labelId="place"
                id="place"
                value={course_place}
                label="Place"
                onChange={handleChangeCoursePlace}
                sx={{ width: 300, marginLeft: 20 }}
              >
                <MenuItem value={'online'}>Online</MenuItem>
                <MenuItem value={'face-to-face'}>Face-to-Face</MenuItem>
              </Select>
              <button
                onClick={handleClose}
                style={{
                  marginTop: 15,
                  marginLeft: 340,
                  backgroundColor: 'purple',
                  border: 'none',
                  width: 120,
                  height: 35,
                  borderRadius: 5,
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}
              >
                Send
              </button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default CreateCourseForm