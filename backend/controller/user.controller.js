import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    //we are using await below and not above because the below function returns an promise(its tells to pause this function here until the promise is finished)

    const user = await User.findOne({ email }); // finding if the email already exist in database or not
    if (user) {
      return res.status(400).json({ message: "Email already Exists!" });
    }

    const hashPassword = await bcryptjs.hash(password, 10);

    const createdUser = new User({
      // new : it is used to create a new instance(document)
      fullname: fullname,
      email: email,
      password: hashPassword,
    });
    await createdUser.save(); // this tells mongoose to take this (createdUser) document and insert it into the user collection in mongodb

    res.status(201).json({ message: "User created successfully",user:{
      _id:createdUser._id,
      fullname:createdUser.fullname,
      email:createdUser.email,
    } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const login = async(req,res)=>{
  try {
    const {email,password} = req.body
    const user =await User.findOne({email})
    const isMatch = await bcryptjs.compare(password,user.password) //we use await cuz it takes time to get response 
    if(!user || !isMatch){
      return res.status(400).json({message:"Invalid Credentials"})
    }
    res.status(200).json({message:"Login successful",user:{
      _id :user._id,
      fullname:user.fullname,
      email:user.email
    }})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
