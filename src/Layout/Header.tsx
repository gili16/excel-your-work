import img from '../images/logo1.png';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const pages = [
  { name: 'יצירת קשר', icon: <ContactMailIcon />, url: '/contact' },  // Added URL
  { name: 'עלינו', icon: <InfoIcon />, url: '/about' },  // Added URL
  { name: 'בית', icon: <HomeIcon />, url: '/home' }  // Added URL
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate(); // Use useNavigate hook

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (pageUrl: string) => {
    setAnchorElNav(null);
    navigate(pageUrl); // Navigate to the URL when menu item is clicked
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ background:'#228B22', height:"70px"}} >
        <Toolbar disableGutters>
          <Avatar src={img} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, }} variant="square"/>
          
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
              onClose={() => handleCloseNavMenu('')}
              sx={{ display: { xs: 'block', md: 'none' }, backgroundColor: 'lightgreen' }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => handleCloseNavMenu(page.url)}>
                  <Tooltip title={page.name} arrow>
                    {page.icon}
                  </Tooltip>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Avatar src={img} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} variant="square"/>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Tooltip key={page.name} title={page.name} arrow>
                <IconButton
                  onClick={() => handleCloseNavMenu(page.url)}  // Use URL for navigation
                  sx={{ color: 'white', mx: 1 }}
                >
                  {page.icon}
                </IconButton>
              </Tooltip>
            ))}
          </Box>
         
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function Header() {
  return <ResponsiveAppBar />;
}

export default Header;
