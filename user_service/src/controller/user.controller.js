var User = require('../models/user.model')
module.exports.getUsers = async(req, res) =>{
     try{
         let user = await User.find();
         //console.log(user)
         res.send({success:true, user})
     }
    catch(error)
    {
        res.send({success:false, error})
    }
    
 }

module.exports.createUser = async(req, res) =>{
   let  {name, email, password} = req.body;
   console.log("req body", req.body)
    try{
        let user = await User.find({email:email});
        //console.log(user)
       if(user.length != 0)
            res.send({success :false, message:'Email Already exist' })
        let newuser = await new User({name, email, password});
        let result = await newuser.save()
        res.send({success:true, result})
    }
   catch(error)
   {
       res.send({success:false, error})
   }
   
}

module.exports.getUser = async(req, res) =>{
    let  {id} = req.params;
     try{
         let user = await User.find({_id:id});
         //console.log(user)
        if(!user)
             res.send({success :false, message:'Record Doesnot Exist' })
         res.send({success:true, user})
     }
    catch(error)
    {
        res.send({success:false, error})
    }
    
 }

 module.exports.updateUser = async(req, res) =>{
    const {id} = req.params
   
     try{
            let  {name, email, password} = req.body;
            let user = await User.find({_id:id});
            console.log(req.body)
            if(!user)
                res.send({success :false, message:'User Doesnot exist' })
            let useremail = await User.find({email:email});
            console.log("user mail",useremail)
            if(useremail.length != 0)
                res.send({success :false, message:'Email Already exist' })
            else{
                let newuser = await User.findOneAndUpdate(user , {name, email, password})
                res.send({success:true, message:'Record Updated Successfully'})
            }
     }
    catch(error)
    {
        res.send({success:false, error})
    }
}
module.exports.deleteUser = async(req, res)=>{    
    const {id} = req.params
    try{
        let user = await User.deleteOne({_id:id})
        if(!user){
            res.send({success:false, message: 'User Doesnot  Exist'})
        }
        
        res.send({success:true, message:'User deleted Successfully'})
    }
    catch(error){
        res.send({success:false, message: error})
    }
}
