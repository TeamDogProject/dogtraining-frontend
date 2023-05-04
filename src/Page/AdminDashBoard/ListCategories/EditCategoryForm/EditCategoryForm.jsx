import React from 'react'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import { createCategory } from '../../../../services/CategoryService';
import { Box } from '@mui/material';
import {Typography} from '@mui/material';
import { useState } from 'react';
import { saveCategory } from '../../../../services/CategoryService';

function EditCategoryForm({show, close, categoryId, categoryName}) {

    // const [open, setOpen] = React.useState(false);
    const [category_name, setCategoryName ] = useState('');
    
    const changeCategory = async (id, name) => {
      console.log('changeCategory')
      try {
        await saveCategory(id,name)
      } catch (error) {
        console.log(error)
      }
    }

    // const handleOpen = () => setOpen(true);
    const handleClose = () => close();

    const handleChangeCategoryName = (e) => {
        setCategoryName(e.target.value)
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
      
  return (
    <div> 
    <Modal
      open={show}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ width:300, marginLeft:25 }}>
          Edit Category Form
        </Typography>
        <Typography id="modal-modal-description" sx={{ width:300, marginTop:4}}>
          <form>
            <FormLabel sx={{ width:300, marginLeft:20 }}>Name</FormLabel>
            <TextField type="text" variant='outlined' placeholder={categoryName} onChange={handleChangeCategoryName} sx={{ width:300, marginLeft:20 }} />
            <button onClick={ () => console.log('Holae') } style={{ marginTop:15, marginLeft:340, backgroundColor:'purple', border:'none',width:120, height:35, borderRadius:5, color:'white', fontSize:15, fontWeight:'bold' }}>Save</button>
          </form>
        </Typography>
      </Box>
    </Modal>
    </div>
  )
}

export default EditCategoryForm