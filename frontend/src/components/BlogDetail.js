import React, { useState, useEffect } from 'react';
 import { useNavigate, useParams } from 'react-router-dom';
 import axios from 'axios';
 import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';

 const labelStyles = {mb:1,mt:2, fontSize:'24px', fontWeight:'bold'}

const BlogDetail = () => {
  const navigate = useNavigate();
  const [blog, setBlog]=useState();
   const id = useParams().id;
   console.log(id); 

   const [inputs, setInputs] = useState({
    
  })

  const handleChange = (e)=>{
    setInputs((prevState)=>({
      ...prevState, [e.target.name] : e.target.value
    }))
  }


   const fetchDetails = async()=>{
    const res = await axios.get(`http://localhost:5000/api/blog/${id}`).catch(err=>console.log(err))
    const data = await res.data;
    return data
   }

   useEffect(()=>{
    fetchDetails().then(data=>{
      setBlog(data.blog)
      setInputs({title:data.blog.title, description:data.blog.description})
    })
   },[id])  //whenever the id in the url will change useEffect re render the component\

   const sendRequest = async ()=>{
    const res = await axios.put(`http://localhost:5000/api/blog/update/${id}`,{
      title: inputs.title,
      description: inputs.description
    }).catch(err=>console.log(err))

    const data = await res.data;
    return data
   }

   console.log(blog);

   const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(inputs)
    sendRequest().then(data=>console.log(data)).then(()=> navigate("/myBlogs/"))
   }

  return (
    
    <div>
      {inputs && 
         <form onSubmit={handleSubmit}>
      <Box border={3} borderColor="linear-gradient(90deg, rgba(36,0,0,1) 0%, rgba(40,115,150,1) 46%, rgba(0,212,255,1) 100%)" 
           borderRadius={10} boxShadow="10px 10px 20px #ccc" padding={3} margin={"auto"} marginTop={3} flexDirection={'cloumn'} width={"39%"}>
        <Typography fontWeight={'bold'} padding={3} color="gray" variant='h2' textAlign={'center'}>Post Your Blog</Typography>
        <InputLabel sx={labelStyles}>Title</InputLabel>
        <TextField fullWidth  name='title' onChange={handleChange} value={inputs.title} margin='normal' variant="outlined"/>
        <InputLabel sx={labelStyles}>Description</InputLabel>
        <TextField fullWidth name='description'onChange={handleChange} value={inputs.description} margin='normal' variant="outlined"/>
        <Button sx={{mt:2, borderRadius:4,}} variant="contained" color='warning' type='submit'>Submit</Button>
      </Box>
      </form>
      }
    </div>
  )
}

export default BlogDetail