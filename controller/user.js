const user=require('../models/user');

async function allUser(req,res){
    const dbusers=await user.find({});
   return res.json(dbusers);
}



    async function getUserbyId(req,res){
        const finduser=await user.findById(req.params.id);    
        if(!finduser){
            res.status(404).send('User not found'); }
        console.log(finduser);
        return res.json(finduser);
    } 

    async function createUser(req,res){
        const body=req.body;
        if(!body || !body.firstname || !body.lastname || !body.email || !body.password){
            return res.status(400).send('Please provide valid data');
        }
    const result = await user.create({firstname:body.firstname,lastname:body.lastname,
        email:body.email,password:body.password});
    console.log(result);
    return res.status(201).send(result);
    }

    async function updateUserbyId(req,res){
        const updateuser=await user.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updateuser){
            res.status(404).send('User not found'); }   
        return res.json(updateuser);}

        async function deleteUserbyId(req,res){     
            const deleteuser=await user.findByIdAndDelete(req.params.id);
            if(!deleteuser){
                res.status(404).send('User not found'); }   
           return res.json(deleteuser);}


        module.exports={allUser,getUserbyId ,createUser,updateUserbyId,deleteUserbyId};