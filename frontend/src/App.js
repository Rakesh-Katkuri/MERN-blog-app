import React, { useEffect } from 'react'
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import Auth from './components/Auth';
import Blogs from './components/Blogs';
import UserBlogs from './components/UserBlogs';
import BlogDetail from './components/BlogDetail';
import AddBlog from './components/AddBlog';

import {useDispatch, useSelector} from 'react-redux'
import { authActions } from './store';

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state)=>state.isLoggedIn)
  console.log(isLoggedIn);

  // after refreshing the page we are still loggedout even if we are storing the user id inside the local storage 
  useEffect(()=>{
    if(localStorage.getItem("userId")){
       dispatch(authActions.login())
    }
  },[dispatch])   


  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        {/* after logout , use same route , not showing any data */}
        {!isLoggedIn ? (<Route path='/auth' element={<Auth/>}/>
        ) : (
        <>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/blogs/add' element={<AddBlog/>}/>
        <Route path='/myBlogs' element={<UserBlogs/>}/>
        <Route path='/myBlogs/:id' element={<BlogDetail/>}/>
        </>
        )}
      </Routes>
    </main>

  </React.Fragment>
}

export default App


//upto 1:59:49  minutes completed 