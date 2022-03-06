const express=require ("express");
const router =express.Router();
const bcrypt = require('bcrypt');
const User =require ("../models/User");
const jwt = require ("jsonwebtoken");
const {loginRules,registerRules,validation} =require ("../middleware/validator");
const isAuth = require("../middleware/passport")

// router.get("/" ,(req,res) =>{
//     res.send("hello world")
// })


// register
router.post("/register",registerRules(),validation ,async (req,res)=> {
    const { name ,lastName, email, password } = req.body;
    try {
        
        const newUser = new User({name ,lastName, email, password})
        // check if the email already exist
        const searchUSer=await User.findOne({email})
        if (searchUSer){
            return res.status(400).send({msg:"user already exist"})
        }





        // hash password
        const salt = 10;
        const genSalt=await bcrypt.genSalt(salt);
        const hashedPassword=await bcrypt.hash(password,genSalt);
        console.log(hashedPassword);
        newUser.password=hashedPassword


        // generate a token
        


        // save the user
        const newUserToken= await newUser.save();
        const payload={
            _id:newUserToken._id,
            name:newUserToken.name,
        };
        const token=await jwt.sign(payload ,process.env.SecretorKey , {expiresIn:3600});
        

        res.status(200).send({user:newUserToken,msg:"user is saved" , token:`Bearer ${token}`})

    } catch (error) {
        res.status(500).send("cannot save the user")
    }
});


// login
router.post("/login",loginRules(),validation,async (req,res)=>{
    const { email, password } = req.body;

    try {
        // find if the user exist
        const searchedUser= await User.findOne({email})
        // if email doesnt exist
        if (!searchedUser){
            return res.status(400).send({msg:"bad credential"})
        }
        // passwords are equals

        const match = await bcrypt.compare(password , searchedUser.password);
        
        if (!match){
            return res.status(400).send({msg:"bad credential"});
        }

        // create token
        const payload={
            _id:searchedUser._id,
        }
        const token=await jwt.sign(payload ,process.env.SecretorKey , {expiresIn:3600});
        
        



// // send the user
    res.status(200).send({user:searchedUser,msg:"success",token});


    } catch (error) {
        res.status(500).send({msg:"cannot save the user"})
    }
})

router.get("/current",isAuth(),(req,res)=>{
    res.status(200).send({user:req.user})

})

module.exports=router