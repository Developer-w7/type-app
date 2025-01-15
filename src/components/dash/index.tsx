import { useRef, useState, useEffect, FC } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import axios from '../../api/axios';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useLogout from '../../hooks/useLogout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
// import Grid from '@mui/material/Grid'; // Grid version 1
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import './dash.css';
import { Box, Container } from '@mui/material';
import { OverviewBudget } from './overview';




const LOGIN_URL = '/auth1';
const LOGOUT_URL = '/logout';


export default function Dashboard() {
  const axiosPrivate = useAxiosPrivate();
  const logout = useLogout();
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()


  const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    color: theme.status.danger,
    '&.Mui-checked': {
      color: theme.status.danger,
    },
  }));
  


  return (
    
 <Container disableGutters maxWidth="xl">
  {/* <div className='dash-main'> */}
  <Box
      component="main"
      sx={{
        flexDirection:"row",
        display:'flex',
        flexGrow: 1,
      }}
    >

<Sidebar
  breakPoint="xs"
    rootStyles={{
      [`.${sidebarClasses.container}`]: {
        backgroundColor: '#fff',
        // width:'100%',
        height:'100vh'
      },
    }}
  >
  <Menu
  menuItemStyles={{
    button: ({ level, active, disabled }) => {
      // only apply styles on first level elements of the tree
      if (level === 0)
        return {
          color: disabled ? '#f5d9ff' : '#d359ff',
          backgroundColor: active ? '#eecef9' : '#fff',
        };
    },
  }}

  >
    <SubMenu label="Chess App">
      <MenuItem> New Game </MenuItem>
    </SubMenu>
    <MenuItem> Documentation </MenuItem>
    <MenuItem> Calendar </MenuItem>
  </Menu>
</Sidebar>
<Box
      component="main"
      sx={{
        flexGrow: 1,
        margin:"8px"
      }}
    >
     
      <Grid container  spacing={2}>


{Array(100).fill(2).map((v,i)=>
   
          <Grid
          key={i}
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewBudget
              difference={12}
              positive
              sx={{ height: '100%' }}
              value="$24k"
            />
          </Grid>
          
          )}



</Grid>
     
  
</Box>
</Box>
</Container>  
   
  );
}
