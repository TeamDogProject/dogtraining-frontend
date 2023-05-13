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
import { listAllCategories } from '../../../../services/CategoryService';

function CreateCourseForm({closeCreate, showCreate}) {

  const [course_name, setCourseName ] = useState('');
  const [course_description, setCourseDescription ] = useState('');
  const [course_duration, setCourseDuration ] = useState('');
  const [course_price, setCoursePrice ] = useState('');
  const [course_place, setCoursePlace ] = useState('');
  const [course_categoryId, setCourseCategoryId ] = useState('');

  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const result = await listAllCategories();
    setCategories(result);
  };

  useEffect(()=> {
    getCategories();
}, []);

  const handleCloseCreate = () => {
    closeCreate()
  }

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

  const handleChangeCourseCategoryId = (e) => {
    const categoryId = e.target.value;
    setCourseCategoryId(categoryId)
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


const handleSubtmit = async (e) => {
  e.preventDefault();
  const createNewCourse = {
    name: course_name, 
    description: course_description,
    duration: course_duration, 
    price: course_price, 
    place: course_place,
    categoryId: course_categoryId
  };
  console.log(createNewCourse)
  try {
    await createCourse(createNewCourse);
    handleCloseCreate()
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div>
      <Modal
        open={showCreate}
        onClose={handleCloseCreate}
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
            <form onSubmit={handleSubtmit}>
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
              <InputLabel id="courseCategory" value={course_categoryId} sx={{ width: 300, marginLeft: 20 }}>
                  Select a category
                </InputLabel>
                <Select
                  labelId="courseCategory"
                  id="courseCategory"
                  onChange={handleChangeCourseCategoryId}
                  sx={{ width: 300, marginLeft: 20 }}
                >
                  {categories.map((category) => (
                    <MenuItem key={category.id} value={category.id}>{category.category_name}</MenuItem>
                  ))}
                </Select>
              <button
                type="submit"
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
                Create
              </button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default CreateCourseForm