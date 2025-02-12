import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Divider from '@mui/material/Divider';
import { Avatar, Chip } from '@mui/material';
import img from '../images/logo1.png';


function Footer(){
    return <Box>
        <Divider>
        <Avatar src={img}  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} variant="square"/>
        </Divider>
        <h3>Excel Your Work - פתרונות אקסל מתקדמים </h3>
    </Box>
}
export default Footer