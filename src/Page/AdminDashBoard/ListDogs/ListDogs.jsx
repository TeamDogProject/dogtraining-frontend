import React, { useEffect, useState } from 'react';
import {listAllDogs} from '../../../services/DogService';
import { Grid, Typography } from '@mui/material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Box } from '@mui/material';
import api from '../../../services/config';
import CreateDogForm from './CreateDogForm/CreateDogForm';
import Button from '@mui/material/Button';
import EditDogForm from './EditDogForm/EditDogForm';

const ListDogs = () => {
  
  const [dogs, setDogs] = useState([]);

  const[showModal, setShowModal] = useState(false)

  const [dogId, setDogId ] = useState('');
  const [dogPhoto, setDogPhoto ] = useState('');
  const [dogName, setDogName] = useState('');
  const [dogBreed, setDogBreed] = useState('');
  const [dogAge, setDogAge] = useState('');
  const [dogSex, setDogSex] = useState('');
  const [dogChip, setDogChip] = useState('');
  const [dogProblem, setDogProblem] = useState('');
  const [dogValoration, setDogValoration] = useState('');

  

  const handleOpen = (dogId, dogPhoto, dogName, dogBreed, dogAge, dogSex, dogChip, dogProblem, dogValoration) => {
    setShowModal(true)
    setDogId(dogId)
    setDogPhoto(dogPhoto)
    setDogName(dogName)
    setDogBreed(dogBreed)
    setDogAge(dogAge)
    setDogSex(dogSex)
    setDogChip(dogChip)
    setDogProblem(dogProblem)
    setDogValoration(dogValoration)
    console.log(dogId, dogPhoto, dogName, dogBreed, dogAge, dogSex, dogChip, dogProblem, dogValoration)
  }

  const handleClose = () => {
    setShowModal(false)
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
      <>
      <EditDogForm close={handleClose} show={showModal} dogId={dogId} dogPhoto={dogPhoto} dogName={dogName} dogBreed={dogBreed} dogAge={dogAge} dogSex={dogSex} dogChip={dogChip} dogProblem={dogProblem} dogValoration={dogValoration} />
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
                        <CreateDogForm />
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
                          <Button onClick={() => handleOpen(dog.id,dog.photo, dog.name, dog.breed, dog.age, dog.sex, dog.chip,dog.problem,dog.valoration)} style={{ marginRight: 50,backgroundColor:'lightgray', border:'none',width:100, height:35, borderRadius:5, color:'black', fontSize:15, fontWeight:'bold', position:'absolute' }}>Edit</Button>
                          <button  onClick={() => deleteDog(dog.id)} style={{ marginLeft:110, backgroundColor:'red', border:'none',width:100, height:35, borderRadius:5, color:'white',fontSize:15, fontWeight:'bold', position:'relative' }}>Delete</button>
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

  return <div>{displayDogs()}</div>;
};

export default ListDogs;
