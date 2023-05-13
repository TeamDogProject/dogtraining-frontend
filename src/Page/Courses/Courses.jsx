import React from 'react'
import MediaCard from '../../Components/Cards/Cards'
import { Typography } from '@mui/material'

function Courses() {
  return (
    <div style={{ padding: '60' }}>
    <>
        <Typography variant="h3" gutterBottom textAlign='center'>
          Explora nuestros cursos
        </Typography>
  
        <MediaCard />
      </>
   </div>
      )
}

      export default Courses