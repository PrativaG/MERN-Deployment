const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");

module.exports = {
    register : (req, res) => {
        User.create(req.body)
            .then(newUser => {
                const token = jwt.sign({
                    id : newUser._id,
                    email : newUser.email
                }, process.env.SECRET_KEY);
    
                res.cookie('token', token, {
                    httpOnly : true
                } )

                res.json({status: 'success!', token});
            })
            .catch(err => res.status(400).json(err));
    },

    async login(req, res){
        const {email, password} = req.body;
        const errorMessage = "Please check your email and password!";
        try { 
            const user = await User.findOne({email})

            if(user === null){
                return res.sendStatus(400);
            }

            const result = await bcrypt.compare(password, user.password);
            if(result === false){
                return res.sendStatus(400);
            }

            
            const token = jwt.sign({
                id : user._id,
                email : user.email
            }, process.env.SECRET_KEY);

            res.cookie('token', token, {
                httpOnly : true
            } )

            res.json({status: 'success!', token});

        } catch (error) {
            res.status(400).json({ message : errorMessage});
        }
    },

    logout(_, res){
        res.clearCookie('token');
        res.json({status: "Logged out!"});
    }
}