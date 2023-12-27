const User = require('../models/user.model')
const jwt = require ('jsonwebtoken')
const bcrypt = require('bcrypt')
const secretKey = process.env.SECRET_KEY 

module.exports = {

    register: async (req ,res) =>{
        try {
            const user = new User(req.body)
            const newUser = await user.save()
            const userToken = jwt.sign(
                {id: newUser._id},
                secretKey)
            res.status(201)
                .cookie("userToken" , userToken,{httpOnly:true})
                .json({message:"Successfull registration"})
        }
        catch (err){
            res.status(400).json({error:err})
            res.sendStatus(400)
        }
    },

    login: async(req, res) => {
        const user = await User.findOne({ email: req.body.email });

        if(user === null) {
            // email not found in users collection
            return res.sendStatus(400);
        }

        // if we made it this far, we found a user with this email address
        // let's compare the supplied password to the hashed password in the database
        const correctPassword = await bcrypt.compare(req.body.password, user.password);

        if(!correctPassword) {
            // password wasn't a match!
            return res.sendStatus(400)
            //json({error:"wrong"})
        }

        // if we made it this far, the password was correct
        const userToken = jwt.sign({id: user._id}, secretKey);
     
        // note that the response object allows chained calls to cookie and json
        res.cookie("usertoken", userToken, {httpOnly: true})
            .json({ msg: "success!" });
    },
    
    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    },

    getAll: async (req,res) => {
        const users=await User.find({})
        .then(users => {
            res.json(users)
            console.log(users);
        })
        .catch(err => res.json(err))
    }

}