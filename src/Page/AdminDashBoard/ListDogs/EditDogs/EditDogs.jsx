import React from 'react'
import { useState } from 'react';
import {Typography} from '@mui/material';
import {Modal} from '@mui/material';
import {Box} from '@mui/material';
import {TextField} from '@mui/material';
import {Button} from '@mui/material';

function EditDogs() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const [name, setName] = useState('');
    const [valoration, setValoration] = useState('');
    const [problem, setProblem] = useState('');
    const [ reset, setReset ] = useState({
        name: '',
        valoration: '',
        problem: ''
    });

    const handleReset = () => {
        setName('');
        setValoration('');
        setProblem('');
    }

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
  return (
    <>
    <Button onClick={handleOpen}><Typography style={{ color:'white'}}>Edit</Typography></Button>
                              <Modal
                                keepMounted
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="keep-mounted-modal-title"
                                aria-describedby="keep-mounted-modal-description"
                              >
                                <Box sx={style}>
                                  <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                                      <form>
                                        <Typography variant='h5'>Edit form</Typography>
                                        <TextField
                                          label="Name"
                                          fullWidth
                                          margin="normal"
                                          value={name}
                                          onChange={(e) => setName(e.target.value)}
                                        />
                                        <TextField
                                          label="Valoration"
                                          fullWidth
                                          margin="normal"
                                          value={valoration}
                                          onChange={(e) => setValoration(e.target.value)}
                                        />
                                        <TextField
                                          label="Problem"
                                          fullWidth
                                          margin="normal"
                                          value={problem}
                                          onChange={(e) => setProblem(e.target.value)}
                                        />
                                        <Button type="submit" variant="contained" color="primary">
                                          Submit
                                        </Button>
                                        <Button size="small" color="secondary" variant="contained" style={{ height:37, width:95, marginLeft:5 }} 
                                        onClick={handleReset}
                                        >
                                            Reset
                                        </Button>
                                      </form>
                                  </Typography>
                                </Box>
                              </Modal>
    </>

  )
}

export default EditDogs