import React from 'react'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { useState, useCallback, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { saveCourse } from '../../../../services/CourseService'


function EditCourseForm({show, close, courseId, courseName, courseDescription, courseDuration, coursePrice, coursePlace}) {
    
    const [course_name, setCourseName] = useState('');
    const [course_description, setCourseDescription] = useState('');
    const [course_duration, setCourseDuration] = useState('');
    const [course_price, setCoursePrice] = useState('');
    const [course_place, setCoursePlace] = useState('');

    const handleClose = () => {
      close();
    }

    const handleChangeCourseName = (e) => {
      setCourseName(e.target.value)
    }

    const handlChangeCourseDescription = (e) => {
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

      const handleSaveCourse = async (e) => {
        console.log(courseId)
        e.preventDefault();
        try {
          const obj={}
          if(course_name){
            obj.name = course_name
          }
          if(course_description){
            obj.description = course_description
          }
          if(course_duration){
            obj.duration = course_duration
          }
          if(course_price){
            obj.price = course_price
          }
          if(course_place){
            obj.place = course_place
          }
          await saveCourse(
            courseId,
            obj
          )
          handleClose();
        } catch (error) {
          console.log(error)
        }
      }

    return(
    <div>
        <Modal
          open={show}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ width:300, marginLeft:25 }}>
              Edit Package Form
            </Typography>
            <Typography id="modal-modal-description" sx={{ width:300, marginTop:4}}>
              <form onSubmit={handleSaveCourse}>
                <FormLabel sx={{ width:300, marginLeft:20 }}>Name</FormLabel>
                <TextField type="text" variant='outlined' placeholder={courseName} onChange={handleChangeCourseName} sx={{ width:300, marginLeft:20 }} />
                <FormLabel sx={{ width:300, marginLeft:20 }}>Description</FormLabel>
                <TextField type="text" variant='outlined' placeholder={courseDescription} onChange={handlChangeCourseDescription} sx={{ width:300, marginLeft:20 }} />
                <FormLabel sx={{ width:300, marginLeft:20 }}>Duration</FormLabel>
                <TextField type="text" variant='outlined' placeholder={courseDuration} onChange={handleChangeCourseDuration} sx={{ width:300, marginLeft:20 }} />
                <FormLabel sx={{ width:300, marginLeft:20 }}>Price</FormLabel>
                <TextField type="text" variant='outlined' placeholder={coursePrice} onChange={handleChangeCoursePrice} sx={{ width:300, marginLeft:20 }} />
                <InputLabel id="place" sx={{ width:300, marginLeft:20 }}>Place</InputLabel>
                <Select
                    labelId="place"
                    id="place"
                    placeholder={course_place}
                    label="place"
                    onChange={handleChangeCoursePlace}
                    sx={{ width:300, marginLeft:20 }}
                >
                    <MenuItem value={"online"}>Online</MenuItem>
                    <MenuItem value={"face-to-face"}>Face-to-Face</MenuItem>
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