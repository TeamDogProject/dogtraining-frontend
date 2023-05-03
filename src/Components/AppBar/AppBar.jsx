import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography,Container, Menu, MenuItem, Avatar, Button, Tooltip, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import AdbIcon from '@mui/icons-material/Adb'
import { useNavigate } from 'react-router-dom'
import { LogingContext } from '../../context/loginContext';
import { useContext } from 'react';
const pages = ['Home', 'About','contact', 'Login', 'Signup']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
{/*   const [isLoggedIn, setIsLoggedIn] = React.useState(false); */}

  const {isLoggedIn, setIsLoggedIn} =  useContext(LogingContext)


  const navigate = useNavigate()

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(token !== null)

   
   
  }, []);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
    
  };

const handleLogout = () => {
  localStorage.removeItem("token")
  navigate('/home')
  if(isLoggedIn)
  location.reload()
}

const handleDashboard = () => {
  navigate('/dasboard')
}
  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  
  }
 
  return (
    <AppBar position="static" sx={{ backgroundColor: '#0A4D68' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    color={'#088395'}
                    overline
                    href={`/${page}`}
                    underline="none"
                  >
                    <Typography
                      textAlign="center"
                      sx={{ fontFamily: 'roboto' }}
                    >
                      {page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
            {pages.map((page) => (
              <Link underline="none" href={`/${page}`}>
                <Button
                  key={page}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          {isLoggedIn && (
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
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
          {  /* {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem> 
 */}
 
<MenuItem key={settings[0]} onClick={handleCloseUserMenu}>
  <Typography textAlign="center">{settings[0]}</Typography>
</MenuItem>

<MenuItem key={settings[1]} onClick={handleCloseUserMenu}>
  <Typography textAlign="center">{settings[1]}</Typography>
</MenuItem>

<MenuItem key={settings[2]} onClick={handleDashboard}>
  <Typography textAlign="center">{settings[2]}</Typography>
</MenuItem>

<MenuItem key={settings[3]} onClick={handleLogout}>
  <Typography textAlign="center">{settings[3]}</Typography>
</MenuItem>
              

            
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);
}

export default ResponsiveAppBar;