const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
    firstName : {
        type : String,
        required : [
            true,
            "First Name is required!"
        ]
    },
    lastName :{
        type: String,
        required : [
            true,
            "Last Name is required!"
        ]
    },
    email :{
        type : String,
        required :[
            true, 
            "Email is required!"
        ],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
          }
    },
    password : {
        type : String,
        required :[
            true, 
            "Password must be provided!"
        ]
    }
}, {timestamps : true});

UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => {
        this._confirmPassword = value;
    });


UserSchema.pre('validate', function(next){

    if(this._password !== this._confirmPassword){
        this.invalidate('confirmPassword', "Password must match with confirm password!")
    }
    next();
});

UserSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

const User = mongoose.model("User", UserSchema);
module.exports = User;