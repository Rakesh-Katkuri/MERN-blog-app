import React, { useState } from 'react';
import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { authActions } from '../store';

const Header = () => {
  const dispatch = useDispatch() //for logout button
  const isLoggedIn = useSelector((state)=>state.isLoggedIn)   
  const [value, setValue] = useState();
     
  return (
  <AppBar position='sticky' sx={{background:"linear-gradient(90deg, rgba(36,0,0,1) 0%, rgba(40,115,150,1) 46%, rgba(0,212,255,1) 100%)"}}>
    <Toolbar>
        <Typography variant='h4'>Blogs App</Typography>
        {isLoggedIn && <Box display="flex" marginLeft={'auto'} marginRight={'auto'}>
          <Tabs textColor='inherit' value={value} onChange={(e,val)=> setValue(val)}>   {/* this value is from material ui */}  
            <Tab LinkComponent={Link} to='/blogs' label="All Blogs"/>
            <Tab LinkComponent={Link} to='/myBlogs' label="My Blogs"/>
            <Tab LinkComponent={Link} to='/blogs/add' label="Add Blog"/>
          </Tabs>
        </Box>}
        <Box display="flex" marginLeft="auto"  >
          {!isLoggedIn && <><Button LinkComponent={Link} to='/auth' variant='contained' sx={{margin:"1", borderRadius:10}} color='warning'>Login</Button>
          <Button LinkComponent={Link} to='/auth' variant='contained' sx={{margin:"1", borderRadius:10}} color='warning'>Signup</Button></>}
          {isLoggedIn && <Button onClick={()=>dispatch(authActions.logout())} LinkComponent={Link} to='/auth' variant='contained' sx={{margin:"1", borderRadius:10}} color='warning'>Logout</Button>}
        </Box>
    </Toolbar>
  </AppBar>
  );
}

export default Header;