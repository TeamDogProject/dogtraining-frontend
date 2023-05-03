import React, { useEffect, useState } from 'react';
import listAllCategories from '../../../services/listAllCategories';
import { Grid, Typography } from '@mui/material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Box } from '@mui/material';
import api from '../../../services/config';
import createCategory from '../../../services/CreateCategory';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import editCategory from '../../../services/EditCategory';


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

const ListCategories =  () => {

    const [ categories, setCategories ] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [ category_name, setCategoryName ] = useState('');

    const handleSubtmit = async (e) => {
      e.preventDefault();
      const createNewCategory = {
        category_name: category_name
      };
      await createCategory(createNewCategory);
      setCategories(getCategories())
    }

    const handleChangeCategoryName = (e) => {
      setCategoryName(e.target.value)
    }
  
    const getCategories = async () => {
        const result = await listAllCategories();
        setCategories(result)
    };

    useEffect(()=> {
        getCategories();
    }, []);

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
        
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box>
                <Typography variant="h6" color="white" marginLeft={2}>
                  List Categories
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
                        <Button onClick={handleOpen} style={{ marginLeft:5, backgroundColor:'green', border:'none',width:135, height:35, borderRadius:5, color:'white', fontSize:15, fontWeight:'bold' }}>New Category</Button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ width:300, marginLeft:25 }}>
                              Create Category Form
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ width:300, marginTop:4}}>
                              <form onSubmit={handleSubtmit}>
                                <FormLabel sx={{ width:300, marginLeft:20 }}>Name</FormLabel>
                                <TextField type="text" variant='outlined' value={category_name} onChange={handleChangeCategoryName} sx={{ width:300, marginLeft:20 }} />
                                <button type="submit" style={{ marginTop:15, marginLeft:340, backgroundColor:'purple', border:'none',width:120, height:35, borderRadius:5, color:'white', fontSize:15, fontWeight:'bold' }}>Send</button>
                              </form>
                            </Typography>
                          </Box>
                        </Modal>
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
                      {categories?.length>0 && categories.map((category) => (
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
                              <button onClick={()=>editCategory(category.id)} style={{ marginLeft:5, backgroundColor:'lightgray', border:'none',width:100, height:35, borderRadius:5, color:'black', fontSize:15, fontWeight:'bold' }}>Edit</button>
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
    