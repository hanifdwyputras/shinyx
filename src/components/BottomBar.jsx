import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { HouseOutlined } from '@mui/icons-material';

export default function BottomBarComponent({ children }) {
  const [selectedValue, setSelectedValue] = React.useState(0);
  const navigate = useNavigate();
  return (
    <BottomNavigation
      showLabels
      onChange={(_, value) => setSelectedValue(value)}
      value={selectedValue}
    >
      <BottomNavigationAction
        label="Home"
        icon={<HouseOutlined />}
        onClick={() => navigate('/')}
      />
      {children}
    </BottomNavigation>
  );
}
