import React from 'react';
import { Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  const handleHomeClick = () => {
    window.location.href = process.env.REACT_APP_DASHBOARD; 
  };

  return (
    <Box
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: '50px',
        paddingTop: '10px',
        backgroundColor: '#ffffff',
        zIndex: 9999,
      }}
    >
      <Box sx={{ padding: '0 10px', cursor: 'pointer' }} onClick={handleHomeClick}>
        <HomeIcon sx={{ fontSize: 40 }} />
      </Box>
      <Box sx={{ padding: '0 10px' }}>
        <NotificationsIcon sx={{ fontSize: 40 }} />
      </Box>
    </Box>
  );
};

export default Header;
