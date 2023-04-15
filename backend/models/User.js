import mongoose  from "mongoose";

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name:{
        type:String,
        required: [true,'Name is required'],
        min:2 ,
        max:100,
    },
    email:{
        type:String,
        required: [true,'email is required'],
      
        max:50,
        unique:true,
    },
    password:{
        type:String,
        required: [true,'password is required'],
        min:5 ,
       
    },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  },
  { timestamps: true }

) 

const User = mongoose.model("User", UserSchema)


export default User