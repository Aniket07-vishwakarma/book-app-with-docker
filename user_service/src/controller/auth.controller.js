var User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const tokenSecret = 'God is almighty'
module.exports.login = async(req, res) =>{
    try{
        let {email, password} = req.body
       // console.log("request body", req.body)
        let user = await User.findOne({email : email})
       // console.log("user", user)
        if(!user){
            res.send({success: false, message: 'Email ID Doesnot exist'})
        }
        if(!user.authenticate(password))
        {
            res.send({success: false, message: 'Incorrect password'})
        }
       // console.log("password ",user.authenticate(password))
        const token = jwt.sign({
            _id: user._id,
            role: user.role
        }, tokenSecret)
        res.json({success: true , name : user.name, token})
        }
        catch(error){
          //  res.send({success: false, error})
        }
    }
    module.exports.verifyToken = (req, res, next) => {
        console.log("In VerifyToke" + JSON.stringify(req.headers));
        //Get Auth header value
        const bearerHearder = req.headers['authorization'];
        //check if bearer is undefined
        if (typeof bearerHearder != 'undefined') {
            console.log("In If" + bearerHearder)
            //split at the space
            const bearer = bearerHearder.split(' ');
            //Get the token from array
            const bearerToken = bearer[1];
            // set the token
            req.token = bearerToken;
            console.log("TOken in Middleware is" + req.token)
            //Next middleware
            next();
        } else {
            //Forbidden
            res.sendStatus(403);
        }
    }
    module.exports.getData = async(req, res) =>{
        const {id} = req.params
        try{
            let product = await User.findOne({_id:id})
            if(!product){
                res.send({success:false, message: 'record doesnot present'})
            }
            res.send({success:true ,product})
        }
        catch(error){
            res.send({success:false, message: error})
        }
    }