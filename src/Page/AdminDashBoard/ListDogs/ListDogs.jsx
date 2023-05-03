import React, { useEffect, useState } from 'react';
import listAllDogs from '../../../services/listAllDogs';
import { Grid, Typography } from '@mui/material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Box } from '@mui/material';
import api from '../../../services/config';
import Button from '@mui/material/Button';
import {Modal} from '@mui/material';
import createDog from '../../../services/CreateDog';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import editDog from '../../../services/EditDog';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ListDogs = () => {
  const [dogs, setDogs] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [ photo, setPhoto ] = useState('');
  const [ name, setName ]= useState('');
  const [ breed, setBreed ]= useState('');
  const [ age, setAge ] = useState('');
  const [ sex, setSex ] = useState('');
  const [ chip, setChip ] = useState('');
  const [ problem, setProblem ] = useState('');
  const [ valoration, setValoration ] = useState('');

  const handleSubmit = async (e) => {
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
    }
    await createDog(createNewDog);
    setDogs(getDogs())
  }

  const handleChangePhoto = (e) => {
    setPhoto(e.target.value)
  }

  const handleChangeName =(e) => {
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

  const handleChangeValoration = (e) => {
    setValoration(e.target.value)
  }

  const handleChangeProblem = (e) => {
    setProblem(e.target.value)
  }


  const getDogs = async () => {
    const result = await listAllDogs();
    setDogs(result);
  };

  useEffect(() => {
    getDogs();
  }, []);

  const deleteDog = async (id) => {
    try {
      const { data } = await api.delete(`/dogs/${id}`, {
        headers: {
          'token': localStorage.getItem('token')
        }
      });
      setDogs(prevDogs => prevDogs.filter(dog => dog.id !== id));
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  function displayDogs() {
    
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h6" color="white" marginLeft={2}>
              List Dogs
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
                        <Button onClick={handleOpen} style={{ marginLeft:5, backgroundColor:'green', border:'none',width:100, height:35, borderRadius:5, color:'white', fontSize:15, fontWeight:'bold' }}>New Dogs</Button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                              Text in a modal
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                              <div>
                              <Button onClick={handleOpen} style={{ marginLeft:5, backgroundColor:'green', border:'none',width:120, height:35, borderRadius:5, color:'white', fontSize:15, fontWeight:'bold' }}>New Course</Button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ width:300, marginLeft:40 }}>
                              Create Dog Form
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ width:400, marginTop:4}}>
                              <form onSubmit={handleSubmit}>
                                <FormLabel sx={{ width:300, marginLeft:30 }}>Photo</FormLabel>
                                <TextField type="text" variant='outlined' value={photo} onChange={handleChangePhoto} sx={{ width:300, marginLeft:30 }} />
                                <FormLabel sx={{ width:300, marginLeft:30 }}>Name</FormLabel>
                                <TextField type="text" variant='outlined' value={name} onChange={handleChangeName} sx={{ width:300,  marginLeft:30 }}/>
                                <FormLabel sx={{ width:300, marginLeft:30 }}>Breed</FormLabel>
                                <TextField type="text" variant='outlined' value={breed} onChange={handleChangeBreed} sx={{ width:300,  marginLeft:30 }}/>
                                <FormLabel sx={{ width:300, marginLeft:30 }}>Age</FormLabel>
                                <TextField type="text" variant='outlined' value={age} onChange={handleChangeAge} sx={{ width:300,  marginLeft:30 }}/>
                                <FormLabel sx={{ width:300, marginLeft:30 }}>Sex</FormLabel>
                                <Select
                                  labelId="sex"
                                  id="demo-simple-select"
                                  value={sex}
                                  label="Sex"
                                  onChange={handleChangeSex}
                                  sx={{ width:300,  marginLeft:30 }}
                                >
                                  <MenuItem value={'male'}>male</MenuItem>
                                  <MenuItem value={'female'}>female</MenuItem>
                                </Select>
                                <FormLabel sx={{ width:300, marginLeft:30 }}>Chip</FormLabel>
                                <TextField type="text" variant='outlined' value={chip} onChange={handleChangeChip} sx={{ width:300,  marginLeft:30 }}/>
                                <FormLabel sx={{ width:300, marginLeft:30 }}>Problem</FormLabel>
                                <TextField type="text" variant='outlined' value={chip} onChange={handleChangeProblem} sx={{ width:300,  marginLeft:30 }}/>
                                <FormLabel sx={{ width:300, marginLeft:30 }}>Valoration</FormLabel>
                                <TextField type="text" variant='outlined' value={chip} onChange={handleChangeValoration} sx={{ width:300,  marginLeft:30 }}/>
                                <button type="submit" style={{ marginTop:15, marginLeft:330, backgroundColor:'purple', border:'none',width:120, height:35, borderRadius:5, color:'white', fontSize:15, fontWeight:'bold' }}>Send</button>
                              </form>
                            </Typography>
                          </Box>
                        </Modal>
                              </div>
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
                      PHOTO
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                      NAME
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                      VALORATION
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                      PROBLEM
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
                {dogs?.length>0 && dogs.map((dog) => (
                  <TableRow key={dog.id}>
                    <TableCell>
                      <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                        {dog.id}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                        {dog.photo}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                        {dog.name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                        {dog.valoration}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                        {dog.problem}
                      </Typography>
                    </TableCell>
                    <TableCell style={{ color: 'white', fontSize: 17 }}>
                          <div>
                            <button onClick={()=>editDog(dog.id)} style={{ marginLeft:5, backgroundColor:'lightgray', border:'none',width:100, height:35, borderRadius:5, color:'black', fontSize:15, fontWeight:'bold' }}>Edit</button>
                            <button  onClick={() => deleteDog(dog.id)} style={{ marginLeft:5, backgroundColor:'red', border:'none',width:100, height:35, borderRadius:5, color:'white',fontSize:15, fontWeight:'bold' }}>Delete</button>
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

  return <div>{displayDogs()}</div>;
};

export default ListDogs;
