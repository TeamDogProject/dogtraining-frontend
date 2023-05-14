import React, { useEffect, useState, useCallback } from 'react';
import { listAllCourses } from '../../../services/CourseService';
import { Grid, Typography } from '@mui/material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Box } from '@mui/material';
import api from '../../../services/config';
import CreateCourseForm from './CreateCourseForm/CreateCourseForm';
import EditCourseForm from './EditCourseForm/EditCourseForm';
import Button from '@mui/material/Button';

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

const ListCourses = () => { 

  const [refresh, updateState] = useState()
  const forceUpdate = useCallback(() => updateState({}), [])
  
  const [courses, setCourses] = useState([]);

  const[showModal, setShowModal] = useState(false)
  const[showModalCreate, setShowModalCreate] = useState(false)

  const [courseId, setCourseId ] = useState('');
  const [courseName,setCourseName  ] = useState('');
  const [courseDescription, setCourseDescription ] = useState('');
  const [courseDuration, setCourseDuration ] = useState('');
  const [coursePrice, setCoursePrice ] = useState('');
  const [coursePlace, setCoursePlace ] = useState('');
  const [courseCategoryId, setCourseCategoryId ] = useState('');

  const handleOpen = (courseId,courseName, courseDescription, courseDuration, coursePrice, coursePlace, courseCategoryId) => {
    setShowModal(true)
    setCourseId(courseId)
    setCourseName(courseName)
    setCourseDescription(courseDescription)
    setCourseDuration(courseDuration)
    setCoursePrice(coursePrice)
    setCoursePlace(coursePlace)
    setCourseCategoryId(courseCategoryId)
  }

  const handleOpenCreate = () => {
    setShowModalCreate(true)
  }

  const handleCloseCreate = () => {
    forceUpdate()
    setShowModalCreate(false)
  }

  const handleClose = () => {
    forceUpdate()
    setShowModal(false)
  }

  const getCourses = async () => {
    const result = await listAllCourses();
    setCourses(result);
  };

  useEffect(() => {
    getCourses();
  }, [refresh]);

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
        <EditCourseForm
          close={handleClose}
          show={showModal}
          courseId={courseId}
          courseName={courseName}
          courseDescription={courseDescription}
          courseDuration={courseDuration}
          coursePrice={coursePrice}
          coursePlace={coursePlace}
          courseCategoryId={courseCategoryId}
        />
        <CreateCourseForm
              closeCreate={handleCloseCreate}
              showCreate={showModalCreate}
            />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box>
              <Typography sx={{ fontWeight:'bold',fontSize:20, position:'absolute' }} color="white" marginLeft={2}>
                List Packages
              </Typography>
            </Box>
            <div>
              <Button
  variant="contained"
  onClick={handleOpenCreate}
  sx={{
    borderRadius: 2,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: 'green',
    height: 'auto',
    m: 'auto',
    mt: 0,
    mb: 1,
    display: 'block',
    left:'auto',
    marginRight:'95px'
  }}
>
  New Package
</Button>
          </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableHead>
                    <Typography
                      variant="h6"
                      style={{ color: 'white', fontSize: 17, marginLeft: 15 }}
                    >
                      <div>
                        <CreateCourseForm />
                      </div>
                    </Typography>
                  </TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography
                        variant="h6"
                        style={{ color: 'white', fontSize: 17 }}
                      >
                        ID
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h6"
                        style={{ color: 'white', fontSize: 17 }}
                      >
                        NAME
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h6"
                        style={{ color: 'white', fontSize: 17 }}
                      >
                        DESCRIPTION
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h6"
                        style={{ color: 'white', fontSize: 17 }}
                      >
                        DURATION
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h6"
                        style={{ color: 'white', fontSize: 17 }}
                      >
                        PRICE
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h6"
                        style={{ color: 'white', fontSize: 17 }}
                      >
                        PLACE
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h6"
                        style={{ color: 'white', fontSize: 17 }}
                      >
                        CATEGORY
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h6"
                        style={{ color: 'white', fontSize: 17 }}
                      >
                        ACTIONS
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {courses?.length > 0 &&
                    courses.map((course) => (
                      <TableRow key={course.id}>
                        <TableCell>
                          <Typography
                            variant="h6"
                            style={{ color: 'white', fontSize: 17 }}
                          >
                            {course.id}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="h6"
                            style={{ color: 'white', fontSize: 17 }}
                          >
                            {course.name}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="h6"
                            style={{ color: 'white', fontSize: 17 }}
                          >
                            {course.description}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="h6"
                            style={{ color: 'white', fontSize: 17 }}
                          >
                            {course.duration}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="h6"
                            style={{ color: 'white', fontSize: 17 }}
                          >
                            {course.price + '€'}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="h6"
                            style={{ color: 'white', fontSize: 17 }}
                          >
                            {course.place}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="h6"
                            style={{ color: 'white', fontSize: 17 }}
                          >
                            {course.categoryId}
                          </Typography>
                        </TableCell>

                        <TableCell style={{ color: 'white', fontSize: 17 }}>
                          <div>
                            <Button
                              onClick={() =>
                                handleOpen(
                                  course.id,
                                  course.name,
                                  course.description,
                                  course.duration,
                                  course.price,
                                  course.place, 
                                  course.categoryId
                                )
                              }
                              style={{
                                backgroundColor: 'lightgray',
                                width:'90px',
                                height:'auto',
                                borderRadius: 8,
                                color: 'black',
                                fontSize: 15,
                                fontWeight: 'bold',
                                margin:2,
                                left:'auto'
                              }}
                            >
                              Edit
                            </Button>
                            <Button
                              onClick={() => deleteCourse(course.id)}
                              style={{
                                marginLeft: 105,
                                width:'90px',
                                height:'auto',
                                borderRadius: 8,
                                fontSize: 15,
                                color: 'white',
                                fontWeight: 'bold',
                                margin:2,
                                left:'auto',
                                backgroundColor:'red',
                              }}
                            >
                              Delete
                            </Button>
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
    )
  }

  return <div>{displayCourses()}</div>;
};

export default ListCourses;
