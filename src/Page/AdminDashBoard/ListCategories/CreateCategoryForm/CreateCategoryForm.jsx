import React from 'react'
import { Button } from '@mui/material'
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import { createCategory } from '../../../../services/CategoryService';
import {FormLabel} from '@mui/material';
import { useState } from 'react';
import { listAllCategories } from '../../../../services/CategoryService';
import { useEffect } from 'react';


function CreateCategoryForm() {

  const [open, setOpen] = React.useState(false);
  const [category_name, setCategoryName ] = useState('');
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [ categories, setCategories ] = useState([]);

  const handleChangeCategoryName = (e) => {
    setCategoryName(e.target.value)
  }

  const getCategories = async () => {
    const result = await listAllCategories();
    setCategories(result)
};

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

  useEffect(()=> {
    getCategories();
}, []);

const handleSubtmit = async (e) => {
  e.preventDefault();
  const createNewCategory = {
    category_name: category_name
  };
  await createCategory(createNewCategory);
  setCategories(getCategories())
}

  return (
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
  )
}

export default CreateCategoryForm