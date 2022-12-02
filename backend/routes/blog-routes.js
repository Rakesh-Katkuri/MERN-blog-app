import express from "express";
import { addBlog,deleteBlog,getAllBlogs, getById, updateBlog , getByUserId} from "../controllers/blog-controller";
 const blogRouter = express.Router();

 blogRouter.get("/",getAllBlogs);
 blogRouter.post("/add", addBlog);
 blogRouter.put("/update/:id", updateBlog );   //put request is used update the data
 blogRouter.get("/:id", getById);
 blogRouter.delete("/:id", deleteBlog);
 blogRouter.get('/user/:id', getByUserId);

 export default blogRouter;