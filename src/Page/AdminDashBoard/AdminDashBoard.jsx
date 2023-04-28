import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import ListDogs from './ListDogs/ListDogs';
import ListBooks from './ListBooks/ListBooks';
import ListVideos from './ListVideos/ListVideos';
import ListPackages from './ListPackages/ListPackages';
import ListUsers from './ListUsers/ListUsers';

function AdminDashBoard() {

  const [section, setSection] = useState('dog')

  const showContent = () => {
    if (section === 'dog') {
      return <ListDogs />
    } else if (section === 'book') {
      return <ListBooks />
    } else if (section === 'video') {
      return <ListVideos />
    } else if (section === 'package') {
      return <ListPackages />
    } else if (section === 'user') {
      return <ListUsers />
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
     setSection('package')
  }

  const handleClickUsers = () => {
    setSection('user')
  }

  return (
    <div>
      <Paper
        sx={{
          width: 420,
          height: 400,
          marginTop: 0,
          marginLeft: 20,
          marginBottom: 20,
          backgroundColor: '#0A4D68',
          color: 'whitesmoke',
          borderRadius: 3,
          position: 'absolute',
        }}
      >
        <MenuList dense>
          <Typography style={{ marginLeft: 70, fontSize: 25, padding: 10 }}>
            Welcome to dashboard
          </Typography>
          <MenuItem style={{ textAlign: 'center', marginRight: 50 }}>
            <ListItemText inset>
              <button onClick={handleClickDogs}>List Dogs</button>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem style={{ textAlign: 'center', marginRight: 50 }}>
            <ListItemText inset style={{ textAlign: 'center' }}>
              <button onClick={handleClickBooks}>List Books</button>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem style={{ textAlign: 'center', marginRight: 50 }}>
            <ListItemText inset>
              <button onClick={handleClickVideos}>List Videos</button>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem style={{ textAlign: 'center', marginRight: 50 }}>
            <ListItemText inset>
              <button onClick={handleClickPackages}>List Packages</button>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem style={{ textAlign: 'center', marginRight: 50 }}>
            <ListItemText inset>
              <button onClick={handleClickUsers}>List Users</button>
            </ListItemText>
          </MenuItem>

          <Divider />
        </MenuList>
      </Paper>
      <Paper
        sx={{
          width: 1420,
          height: 900,
          marginLeft: 100,
          backgroundColor: '#0A4D68',
          color: 'whitesmoke',
          borderRadius: 3,
          marginBottom: 60,
          position: 'relative',
          marginTop: 10,
        }}
      >
        <MenuList dense>
          <Typography
            style={{
              marginLeft: 15,
              fontSize: 25,
              padding: 10,
              textAlign: 'center',
            }}
          >
            Administration
          </Typography>
          <Divider />
        </MenuList>
        <MenuItem style={{ textAlign: 'center', marginRight: 50 }}>
          <ListItemText inset>Dogs</ListItemText>
        </MenuItem>
        <Divider />
        {showContent()}
      </Paper>
    </div>
  )
}

export default AdminDashBoard