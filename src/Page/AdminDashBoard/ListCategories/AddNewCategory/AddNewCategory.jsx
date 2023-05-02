import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, Box } from '@mui/material';
import Typography from '@mui/material/Typography';

function AddNewCategory({ onAddCategory }) {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCategory(categoryName);
    setCategoryName('');
  };
}

function AddNew() {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const token = localStorage.getItem('token');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddNewCategory = async (categoryName) => {
    const newCategory = {
      category_name: categoryName,
    };
    try {
      const response = await axios.post('/categories', newCategory, {
        headers: {
        'token': localStorage.getItem('token'),
        }
      });
      setCategories([...categories, response.data]);
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          marginLeft: 5,
          backgroundColor: 'green',
          border: 'none',
          width: 140,
          height: 35,
          borderRadius: 5,
          color: 'white',
          fontSize: 15,
          fontWeight: 'bold',
        }}
      >
        New Category
      </Button>
      <AddNewCategory onAddCategory={handleAddNewCategory} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Category
          </Typography>
          <AddNewCategory onAddCategory={handleAddNewCategory} />
        </Box>
      </Modal>
    </div>
  );
}

export default AddNew;
