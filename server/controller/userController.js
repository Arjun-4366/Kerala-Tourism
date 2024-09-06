  const userModel = require("../model/userModel");
  const generateToken = require("../config/token");
  const bcrypt = require("bcrypt");

  // Hashing the user password
  const securePassword = async (password) => {
    const hashedPassword = bcrypt.hash(password, 10);
    return hashedPassword;
  };

  // User registration
  const register = async (req, res) => {
    try {
      const { name, email, contact, password } = req.body;

      if (!name || !email || !contact || !password) {
        return res.json({
          message: "Please fill all the fields",
        });
      }

      const existingUser = await userModel.findOne({ email: email });
      if (existingUser) {
        return res.status(400).json({
          message: "An account already exists with this email, please login",
        });
      }

      const secPassword = await securePassword(password);
      
      const userData = new userModel({
        name: name,
        email: email,
        contact: contact,
        password: secPassword,
      });

      
      if (req.file) {
        userData.image = req.file.filename
      }
    const newUser = await userModel.create(userData)
    
      await newUser.save();
      console.log(newUser)
      if(newUser){
        const token = generateToken(newUser._id)
        res.status(200).json({
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          contact: newUser.contact,
          image:newUser.image,
          token: token
        });
      }
    
    } catch (error) {
      res.status(500).json({ message: "Registration failed", error: error.message });
    }
  };

  module.exports = {
    register,
  };
