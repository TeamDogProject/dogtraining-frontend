import React, { useEffect, useState, useCallback } from 'react';
import { Grid, Typography } from '@mui/material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Box } from '@mui/material';
import api from '../../../services/config';
import CreateCategoryForm  from './CreateCategoryForm/CreateCategoryForm';
import EditCategoryForm  from './EditCategoryForm/EditCategoryForm';
import { listAllCategories } from '../../../services/CategoryService';
import { Button } from '@mui/material';

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

    const [refresh, updateState] = useState()
    const forceUpdate = useCallback(() => updateState({}), [])

    const [ categories, setCategories ] = useState([]);

    const [categoryId, setCategoryId] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [showModal, setShowModal] = useState(false)
    const [showModalCreate, setShowModalCreate] = useState(false)

    const handleOpen = (categoryId, categoryName) => {
      setShowModal(true)
      setCategoryId(categoryId)
      setCategoryName(categoryName)
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

    const getCategories = async () => {
      const result = await listAllCategories();
      setCategories(result)
  };

    useEffect(()=> {
      getCategories();
  }, [refresh]);

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
          <>
            
            <EditCategoryForm
              close={handleClose}
              show={showModal}
              categoryId={categoryId}
              categoryName={categoryName}
            />
            <CreateCategoryForm
              closeCreate={handleCloseCreate}
              showCreate={showModalCreate}
            />
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box>
                  <Typography sx={{ fontWeight:'bold', position:'absolute',fontSize:20 }} color="white" marginLeft={2}>
                    List Categories
                  </Typography>
                  <Button
              onClick={() => handleOpenCreate()}
              style={{
                backgroundColor: 'green',
                border: 'none',
                width: 135,
                height: 35,
                borderRadius: 5,
                color: 'white',
                fontSize: 15,
                fontWeight: 'bold',
                marginLeft:1200,
              }}
            >
              New Category
            </Button>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <Typography
                          style={{
                            color: 'white',
                            fontSize: 17,
                            marginLeft: 15,
                          }}
                        >
                          <div>
                            <CreateCategoryForm />
                          </div>
                        </Typography>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography style={{ color: 'white', fontSize: 17 }}>
                            ID
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography style={{ color: 'white', fontSize: 17 }}>
                            NAME
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography style={{ color: 'white', fontSize: 17 }}>
                            Actions
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {categories?.length > 0 &&
                        categories.map((category) => (
                          <TableRow key={category.id}>
                            <TableCell>
                              <Typography
                                /* variant="h6" */ style={{
                                  color: 'white',
                                  fontSize: 17,
                                }}
                              >
                                {category.id}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                /* variant="h6" */ style={{
                                  color: 'white',
                                  fontSize: 17,
                                }}
                              >
                                {category.category_name}
                              </Typography>
                            </TableCell>
                            <TableCell style={{ color: 'white', fontSize: 17 }}>
                              <div>
                                <Button
                                  onClick={() =>
                                    handleOpen(
                                      category.id,
                                      category.category_name
                                    )
                                  }
                                  style={{
                                    marginRight: 50,
                                    backgroundColor: 'lightgray',
                                    border: 'none',
                                    width: 100,
                                    height: 35,
                                    borderRadius: 5,
                                    color: 'black',
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                    position: 'absolute',
                                  }}
                                >
                                  Edit
                                </Button>
                                <button
                                  onClick={() => deleteCategory(category.id)}
                                  style={{
                                    marginLeft: 105,
                                    backgroundColor: 'red',
                                    border: 'none',
                                    width: 100,
                                    height: 35,
                                    borderRadius: 5,
                                    color: 'white',
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                  }}
                                >
                                  Delete
                                </button>
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

      return <div>{displayCategories()}</div>;
};
    
    export default ListCategories;
    