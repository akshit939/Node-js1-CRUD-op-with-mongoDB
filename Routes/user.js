const express=require('express');

const {allUser,getUserbyId,createUser,updateUserbyId,deleteUserbyId} = require('../controller/user');
const router=express.Router();

router.route("/").get(allUser).post(createUser)

router.route('/:id').get(getUserbyId).delete(deleteUserbyId).put(updateUserbyId);

    module.exports=router;