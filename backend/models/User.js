import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        // required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    blogs:[{type: mongoose.Types.ObjectId, ref:"Blog"}],
});
export default mongoose.model("User", userSchema) //exporting the collection , model means it will create the model for us like collection
            //  User is name of the collection and schema of the user is userSchema
// mongodb stored as users