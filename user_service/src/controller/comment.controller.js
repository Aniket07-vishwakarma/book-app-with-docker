var User = require('../models/user.model');
var Comment = require('../models/comment.model');
const jwt = require('jsonwebtoken')
const tokenSecret = 'God is almighty'
module.exports.getComments = async (req, res) => {
    try {
      let comment = await Comment.find()
      res.send({ success:true, comment });
    }
    catch (error) {
        res.send({ success:false, error });
    }
  }
module.exports.createComment = async (req, res) => {
  let { id } = req.params;
  try {
    let {comments} = req.body 
    console.log("passing value", id,comments)
    let user = await User.findById({ _id: id });
    console.log("users output", user)
    if (!user) {
      res.send({ success: false, message: 'User Does not Exist' });
    }
    let comment = new Comment({ users:  user._id ,comments})
    let result = await comment.save();
    res.send({ success:true, result });
  }
  catch (error) {
  }
}
module.exports.updateComment = async (req, res) => {
    let { id } = req.params;
    try {
      let {comments} = req.body 
      console.log("passing value", id,comments)
      let list = await Comment.findById({ _id: id });
      console.log("list output", list)
      if (!list) {
        res.send({ success: false, message: 'Comment Does not Exist' });
      }
      console.log("2nd time checking", list)
      let newcomment = await Comment.findOneAndUpdate((Comment.findById({ _id: id })) , {comments: comments})
      console.log("new update", newcomment)
      res.send({success:true, message:'Record Updated Successfully'})
    }
    catch (error) {
    }
  }
module.exports.deleteComment = async(req, res)=>{
    const {id} = req.params
    try{
        let comment = await Comment.deleteOne({_id:id})
        if(!comment){
            res.send({success:false, message: 'comment Id Doesnot  Exist'})
        }
        
        res.send({success:true, message:'Comment deleted Successfully'})
    }
    catch(error){
        res.send({success:false, message: error})
    }
}
module.exports.verifyToken = (req, res, next) => {
    console.log("In VerifyToke" + JSON.stringify(req.headers));
    const bearerHearder = req.headers['authorization'];
    if (typeof bearerHearder != 'undefined') {
        console.log("In If" + bearerHearder)
        const bearer = bearerHearder.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        console.log("TOken in Middleware is" + req.token)
        next();
    } else {
        res.sendStatus(403);
    }
}
module.exports.getComment = async(req, res) =>{
    let  {id} = req.params;
     try{
         let comment = await Comment.find({_id:id}).populate('users');
        if(!comment)
             res.send({success :false, message:'Record Doesnot Exist' })
         res.send({success:true, comment})
     }
    catch(error)
    {
        res.send({success:false, error})
    }
    
 }