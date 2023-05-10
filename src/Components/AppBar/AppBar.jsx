import * as React from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Menu,
  MenuItem,
  Avatar,
  Button,
  Tooltip,
  Link,
} from '@mui/material'
import { getProfile } from '../../services/userService'
import { login } from '../../services/authService'
import MenuIcon from '@mui/icons-material/Menu'
import PetsIcon from '@mui/icons-material/Pets';

import { useNavigate } from 'react-router-dom'
import { LogingContext } from '../../context/loginContext'
import { useContext } from 'react'
const pages = [{name:'Home', path:''}, {name:'About', path:'About'}, {name:'Contact', path:'Contact'}, {name: 'Courses', path: 'Courses'}] /* 'Login', 'Signup */
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']
const settings2 = ['Login', 'Signup']

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  {
    /*   const [isLoggedIn, setIsLoggedIn] = React.useState(false); */
  }

  const { isLoggedIn, setIsLoggedIn } = useContext(LogingContext)

  const navigate = useNavigate()

  React.useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(token !== null)
  }, [])

  const handleLoginBottom = () => {
    navigate('/login')
  }

  const handleSignUp = () =>{
    navigate('/signup')
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
    if (isLoggedIn) location.reload()
  }


  const handleGetProfile = async () => {

    const resprofile = await getProfile();

    if (localStorage.getItem('token') && resprofile.role === 'admin') {
      console.log('Perfil de administrador detectado');
      location.reload();
    } else {
      console.log('Perfil de usuario detectado');
      navigate('/UserProfile');
    }
    
  }



  const handleDashboard = async () => {
   
    const resprofile = await getProfile();

    if (resprofile.role === 'admin') {
      console.log('Perfil de administrador detectado');
      navigate('/adminDashBoard');
    } else {
      console.log('Perfil de usuario detectado');
      navigate('/UserDashboard');
    }
    
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: '#0A4D68' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PetsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h1"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize:24,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DogTraining
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, idx) => (
                <MenuItem key={idx} onClick={handleCloseNavMenu}>
                  <Link
                    color={'#088395'}
                    overline="true"
                    href={`/${page.path}`}
                    underline="none"
                  >
                    <Typography
                      textAlign="center"
                      sx={{ fontFamily: 'roboto' }}
                    >
                      {page.name}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <PetsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DogTraining
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, idx) => (
              <Link key={idx} underline="none" href={`/${page.path}`}>
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {isLoggedIn && (
              <Tooltip  title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="#" />
                </IconButton>
              </Tooltip>
            )}

            {!isLoggedIn && (
              <div>
                <Button
                  
                  onClick={handleLoginBottom}
                  sx={{ p: 0 }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontSize: '0.875rem',
                      color: 'white',
                      borderRadius: 4,
                      fontWeight: 500,
                      lineHeight: 1.75,
                    }}
                    textAlign="center"
                  >
                    {settings2[0]}
                  </Typography>
                </Button>
                <Button  onClick={handleSignUp} sx={{ p: 0 }}>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontSize: '0.875rem',
                      color: 'white',
                      borderRadius: 4,
                      fontWeight: 500,
                      lineHeight: 1.75,
                    }}
                    textAlign="center"
                  >
                    {settings2[1]}
                  </Typography>
                </Button>
              </div>
            )}
            
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser) && isLoggedIn}
              onClose={handleCloseUserMenu} //esta función cierra el menu
            >
              <MenuItem
                
                onClick={handleGetProfile} //MenuAvatar Profile
              >
                <Typography textAlign="center">{settings[0]}</Typography>
              </MenuItem>

              <MenuItem
               
                onClick={handleDashboard} //MenuAvatar DashBoard
              >
                <Typography textAlign="center">{settings[2]}</Typography>
              </MenuItem>

              <MenuItem
               
                onClick={handleLogout} //MenuAvatar Logout
              >
                <Typography textAlign="center">{settings[3]}</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ResponsiveAppBar
