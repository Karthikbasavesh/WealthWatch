const mongoose=require('mongoose')
const express =require('express')
const userModels=require('../model/userModel')
const router=express.Router();
const logincontroller=require('../controllers/usersController')
router.get('/login',usercontroller.getuser)

router.post('/login',usercontroller.addNewUser)
// router.patch('/lo/:userId',usercontroller.patchUser)
// router.delete('/user/:userId',usercontroller.deletUser)


module.exports=router;