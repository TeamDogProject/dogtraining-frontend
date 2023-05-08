import React from 'react'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { saveCategory } from '../../../../services/CategoryService';


function EditCategoryForm({ show, close, categoryId, categoryName }) {

  const [category_name, setCategoryName] = useState(categoryName);

  const handleClose = () => {
    close();
    reload();
  }

  const reload = () => window.location.reload();

  const handleChangeCategoryName = (e) => {
    setCategoryName(e.target.value)
  }

  const handleSaveCategory = async (e) => {
    console.log(categoryId)
    e.preventDefault();
    try {
      await saveCategory(categoryId, category_name);
      handleClose();
    } catch (error) {
      console.log(error);
    }
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

  return (
    <div>
      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onExit={reload}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ width: 300, marginLeft: 25 }}>
            Edit Category Form
          </Typography>
          <Typography id="modal-modal-description" sx={{ width: 300, marginTop: 4 }}>
            <form onSubmit={handleSaveCategory}>
              <FormLabel sx={{ width: 300, marginLeft: 20 }}>Name</FormLabel>
              <TextField type="text" variant='outlined' placeholder={categoryName} onChange={handleChangeCategoryName} sx={{ width: 300, marginLeft: 20 }} />
              <Button variant="contained"  type="submit" style={{ marginTop: 15, marginLeft: 340, backgroundColor:'purple',color:'white' }}>
                Save
              </Button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default EditCategoryForm