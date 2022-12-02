import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/Blog-routes';
import router from './routes/user-routes';
import cors from 'cors';


const app = express(); //now we need to use express in the app and express js will give all of its func to the app variable 
                        // now the express given all of the reference to this app 
app.use(cors());
app.use(express.json());   //convert json formats
app.use("/api/user",router); //http://localhost:5000/api/user/ next move on postman
app.use("/api/blog", blogRouter);

// app.use("/api", (req, res, next)=>{
//     res.send("hello world akhil")
// })
mongoose.connect('mongodb+srv://rakesh:4MvoGymwRTKrFUAu@cluster0.dbzehsa.mongodb.net/Blog?retryWrites=true&w=majority'
).then(()=>app.listen(5000)) // when mongodb connect app will listen to the server 5000 port
 .then(()=>console.log("connected to DB and listnening to localhost 5000 ...!"))
 .catch((err)=>console.log(err))

