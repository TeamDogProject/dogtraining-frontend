import React, { useEffect, useState } from 'react';
import listAllCategories from '../../../services/listAllCategories';
import { Grid, Typography } from '@mui/material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Box } from '@mui/material';
import api from '../../../services/config';
import AddNew from './AddNewCategory/AddNewCategory';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ListCategories =  () => {
    const [ categories, setCategories ] = useState([]);
    const [categoryName, setCategoryName] = useState("");

    const handleAddNewCategory = (newCategory) => {
      setCategoryName([...categories, newCategory])
    }

    const getCategories = async () => {
        const result = await listAllCategories();
        setCategories(result)
    };

    useEffect(()=> {
        getCategories();
    })

    const handleSubmit = (e) => {
      e.preventDefault();
      onAddCategory(categoryName);
      setCategoryName('');
    };

    const deleteCategory = async (id) => {
        try {
          const { data } = await api.delete(`/categories/${id}`, {
            headers: {
              'token': localStorage.getItem('token')
            }
          });
          setCategories(prevCategories => prevCategories.filter(category => category.id !== id));
          return data;
        } catch (error) {
          console.log(error);
        }
      };
    
      function displayCategories() {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
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
                      <TableRow>
                        <Typography variant="h6" style={{ color: 'white', fontSize: 17, marginLeft: 15 }}>
                          <div>
                            <AddNew onAddCategory={handleAddNewCategory}/>
                          </div>
                        </Typography>
                      </TableRow>
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
                            Actions
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {categories.map((category) => (
                        <TableRow key={category.id}>
                          <TableCell>
                            <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                              {category.id}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="h6" style={{ color: 'white', fontSize: 17 }}>
                              {category.category_name}
                            </Typography>
                          </TableCell>
                          <TableCell style={{ color: 'white', fontSize: 17 }}>
                            <div>
                              <button style={{ marginLeft:5, backgroundColor:'lightgray', border:'none',width:100, height:35, borderRadius:5, color:'black', fontSize:15, fontWeight:'bold' }}>Edit</button>
                              <button  onClick={() => deleteCategory(category.id)} style={{ marginLeft:5, backgroundColor:'red', border:'none',width:100, height:35, borderRadius:5, color:'white',fontSize:15, fontWeight:'bold' }}>Delete</button>
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

      return <div>{displayCategories()}</div>;
};
    
    export default ListCategories;
    