import React, { useEffect, useState, useCallback } from 'react';
import { listAllCourses } from '../../../services/CourseService';
import { Grid, Typography } from '@mui/material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Box } from '@mui/material';
import api from '../../../services/config';
import CreateCourseForm from './CreateCourseForm/CreateCourseForm';
import EditCourseForm from './EditCourseForm/EditCourseForm';
import Button from '@mui/material/Button';


const ListCourses = () => { 

  const [, updateState] = useState()
  const forceUpdate = useCallback(() => updateState({}), [])
  
  const [courses, setCourses] = useState([]);
  const[showModal, setShowModal] = useState(false)

  const [courseId, setCourseId ] = useState('');
  const [courseName,setCourseName  ] = useState('');
  const [courseDescription, setCourseDescription ] = useState('');
  const [courseDuration, setCourseDuration ] = useState('');
  const [coursePrice, setCoursePrice ] = useState('');
  const [coursePlace, setCoursePlace ] = useState('');

  const handleOpen = (courseId,courseName, courseDescription, courseDuration, coursePrice, coursePlace) => {
    setShowModal(true)
    setCourseId(courseId)
    setCourseName(courseName)
    setCourseDescription(courseDescription)
    setCourseDuration(courseDuration)
    setCoursePrice(coursePrice)
    setCoursePlace(coursePlace)

    console.log(courseId,courseName, courseDescription, courseDuration, coursePrice, coursePlace)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const getCourses = async () => {
    const result = await listAllCourses();
    setCourses(result);
  };

  useEffect(() => {
    getCourses();
  });

  const deleteCourse = async (id) => {
    try {
      const { data } = await api.delete(`/packages/${id}`, {
        headers: {
          'token': localStorage.getItem('token')
        }
      });
      setCourses(prevCourses => prevCourses.filter(course => course.id !== id));
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  function displayCourses() {
    return (
      <>
      <EditCourseForm close={handleClose} show={showModal} courseId={courseId} courseName={courseName} courseDescription={courseDescription} courseDuration={courseDuration} coursePrice={coursePrice} coursePlace={coursePlace} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h6" color="white" marginLeft={2}>
              List Courses
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableHead>
                    <Typography variant="h6" style={{ color: 'white', fontSize: 17, marginLeft:15 }}> 
                    <div>
                       <CreateCourseForm/>
                    </div>
                    </Typography>
                </TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                      ID
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                      NAME
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                      DESCRIPTION
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                      DURATION
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                      PRICE
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                      PLACE
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                      ACTIONS
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {courses?.length>0 && courses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell>
                      <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                        {course.id}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                        {course.name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                        {course.description}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                        {course.duration}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                        {course.price+'€'}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                        {course.place}
                      </Typography>
                    </TableCell>
                    
                    <TableCell style={{ color: 'white', fontSize: 17 }}>
                          <div>
                          <Button onClick={() => handleOpen(course.id, course.name,course.description,course.duration,course.price,course.place)} style={{ marginRight: 50,backgroundColor:'lightgray', border:'none',width:100, height:35, borderRadius:5, color:'black', fontSize:15, fontWeight:'bold', position:'absolute' }}>Edit</Button>
                            <button  onClick={() => deleteCourse(course.id)} style={{ marginLeft:105, backgroundColor:'red', border:'none',width:100, height:35, borderRadius:5, color:'white',fontSize:15, fontWeight:'bold' }}>Delete</button>
                          </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
    );
  }

  return <div>{displayCourses()}</div>;
};

export default ListCourses;
