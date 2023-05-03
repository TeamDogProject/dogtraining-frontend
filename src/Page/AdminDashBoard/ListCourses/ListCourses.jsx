import React, { useEffect, useState } from 'react';
import listAllCourses from '../../../services/listAllCourses';
import { FormControl, Grid, Typography } from '@mui/material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Box } from '@mui/material';
import api from '../../../services/config';
import Button from '@mui/material/Button';
import {Modal} from '@mui/material';
import {FormLabel,TextField, InputLabel} from '@mui/material';
import {Select} from '@mui/material';
import {MenuItem} from '@mui/material';
import createCourse from '../../../services/CreateCourse';


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

  const [courses, setCourses] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName ] = useState('');
  const [description, setDescription ] = useState('');
  const [duration, setDuration ] = useState('');
  const [price , setPrice ] = useState('');
  const [place, setPlace ] = useState('');

  const handleSumit = async (e) => {
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

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeDescription = (e) => {
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

  const getCourses = async () => {
    const result = await listAllCourses();
    setCourses(result);
  };

  useEffect(() => {
    getCourses();
  }, []);

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
                        <Button onClick={handleOpen} style={{ marginLeft:5, backgroundColor:'green', border:'none',width:120, height:35, borderRadius:5, color:'white', fontSize:15, fontWeight:'bold' }}>New Course</Button>
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
                              <form onSubmit={handleSumit}>
                                <FormLabel sx={{ width:300, marginLeft:20 }}>Name</FormLabel>
                                <TextField type="text" variant='outlined' value={name} onChange={handleChangeName} sx={{ width:300, marginLeft:20 }} />
                                <FormLabel sx={{ width:300, marginLeft:20 }}>Description</FormLabel>
                                <TextField type="text" variant='outlined' value={description} onChange={handleChangeDescription} sx={{ width:300,  marginLeft:20 }}/>
                                <FormLabel sx={{ width:300, marginLeft:20 }}>Duration</FormLabel>
                                <TextField type="text" variant='outlined' value={duration} onChange={handleChangeDuration} sx={{ width:300,  marginLeft:20 }}/>
                                <FormLabel sx={{ width:300, marginLeft:20 }}>Price</FormLabel>
                                <TextField type="text" variant='outlined' value={price} onChange={handleChangePrice} sx={{ width:300,  marginLeft:20 }}/>
                                <FormLabel sx={{ width:300, marginLeft:20 }}>Place</FormLabel>
                                <Select
                                  labelId="place"
                                  id="demo-simple-select"
                                  value={place}
                                  label="Place"
                                  onChange={handleChangePlace}
                                  sx={{ width:300,  marginLeft:20 }}
                                >
                                  <MenuItem value={'online'}>online</MenuItem>
                                  <MenuItem value={'face-to-face'}>face-to-face</MenuItem>
                                </Select>
                                <button type="submit" style={{ marginTop:15, marginLeft:340, backgroundColor:'purple', border:'none',width:120, height:35, borderRadius:5, color:'white', fontSize:15, fontWeight:'bold' }}>Send</button>
                              </form>
                            </Typography>
                          </Box>
                        </Modal>
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
                            <button style={{ marginLeft:5, backgroundColor:'lightgray', border:'none',width:100, height:35, borderRadius:5, color:'black', fontSize:15, fontWeight:'bold' }}>Edit</button>
                            <button  onClick={() => deleteCourse(course.id)} style={{ marginLeft:5, backgroundColor:'red', border:'none',width:100, height:35, borderRadius:5, color:'white',fontSize:15, fontWeight:'bold' }}>Delete</button>
                          </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    );
  }

  return <div>{displayCourses()}</div>;
};

export default ListCourses;
