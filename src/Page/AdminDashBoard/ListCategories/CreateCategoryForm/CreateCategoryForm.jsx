import React from 'react'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import { createCategory } from '../../../../services/CategoryService'
import { FormLabel } from '@mui/material'
import { useState } from 'react'

function CreateCategoryForm({ closeCreate, showCreate }) {
  const [category_name, setCategoryName] = useState('')

  const handleCloseCreate = () => {
    closeCreate()
  }

  const handleChangeCategoryName = (e) => {
    setCategoryName(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const createNewCategory = {
      category_name: category_name,
    }
    try {
      await createCategory(createNewCategory)
      handleCloseCreate()
    } catch (error) {
      console.log(error)
    }
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
  }

  return (
    <div>
      <Modal
        open={showCreate}
        onClose={handleCloseCreate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ width: 300, marginLeft: 25 }}
          >
            Create Category Form
          </Typography>
          {/* <Typography
            id="modal-modal-description"
            sx={{ width: 300, marginTop: 4 }}
          > */}
            <form onSubmit={handleSubmit}>
              <FormLabel sx={{ width: 300, marginLeft: 20 }}>Name</FormLabel>
              <TextField
                type="text"
                variant="outlined"
                value={category_name}
                onChange={handleChangeCategoryName}
                sx={{ width: 300, marginLeft: 20 }}
              />
              <Button
                variant="contained"
                type="submit"
                style={{
                  marginTop: 15,
                  marginLeft: 340,
                  backgroundColor: 'purple',
                  border: 'none',
                  width: 120,
                  height: 35,
                  borderRadius: 5,
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}
              >
                Create
              </Button>
            </form>
          {/* </Typography> */}
        </Box>
      </Modal>
    </div>
  )
}

export default CreateCategoryForm
