import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListDogs from './ListDogs/ListDogs'
import ListBooks from './ListBooks/ListBooks';
import ListVideos from './ListVideos/ListVideos';
import ListCourses from './ListCourses/ListCourses';
import ListUsers from './ListUsers/ListUsers';
import ListCategories from './ListCategories/ListCategories';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


function AdminDashBoard() {

  const [section, setSection] = useState('dog')

  const showContent = () => {
    if (section === 'dog') {
      return <ListDogs />
    } else if (section === 'book') {
      return <ListBooks />
    } else if (section === 'video') {
      return <ListVideos />
    } else if (section === 'course') {
      return <ListCourses />
    } else if (section === 'user') {
      return <ListUsers />
    }else if (section === 'category') {
      return <ListCategories />
    }
  }

  const handleClickDogs = () =>{
    setSection('dog')
  }
  const handleClickBooks = () => {
    setSection('book')
  }
  const handleClickVideos = () => {
    setSection('video')
  }
  const handleClickPackages = () => {
     setSection('course')
  }
  const handleClickUsers = () => {
    setSection('user')
  }
  const handleClickCategories = () => {
    setSection('category')
  }
 

  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={12} style={{ marginTop:9 }}>
          <Box sx={{ bgcolor: '#0A4D68'}}>
                  <Typography variant='caption' style={{ fontSize:20, marginLeft:15, color:'white' }}>Welcome Admin</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
                    <List
                sx={{bgcolor:'#0A4D68', color:'white' }}
                aria-label="contacts"
              >
                <ListItem disablePadding>
                  <ListItemButton style={{ display: 'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-around' }}>
                      <Link onClick={handleClickDogs} style={{ textDecoration:'none', color:'white'}}><Typography>Dogs</Typography></Link>
                      <Link onClick={handleClickBooks} style={{ textDecoration:'none', color:'white' }}><Typography>Books</Typography></Link>
                      <Link onClick={handleClickVideos} style={{ textDecoration:'none', color:'white' }}><Typography>Videos</Typography></Link>
                      <Link onClick={handleClickPackages} style={{ textDecoration:'none', color:'white' }}><Typography>Packages</Typography></Link>
                      <Link onClick={handleClickUsers} style={{ textDecoration:'none', color:'white' }}><Typography>Users</Typography></Link>
                      <Link onClick={handleClickCategories} style={{ textDecoration:'none', color:'white' }}><Typography>Categories</Typography></Link>
                </ListItemButton>
                </ListItem>
              </List>
      </Grid>
      <Grid item xs={12} sm={12} style={{}}>
          <Box sx={{ bgcolor: '#0E2B44', height: '100%', padding:2}}>
                    {
                      showContent()
                    }
          </Box>
      </Grid>
    </Grid>   
  </React.Fragment>
  );
}

export default AdminDashBoard