// const mongoose=require('mongoose')
// const express =require('express')

// const userModels=require('../model/userModel')
// const router=express.Router();

// router.get('/',(req,res)=>
// {
//     userModels.find().then(docs=>
//         {
//             res.send(docs)
//         })
// }).post('/',(request,response)=>
// {
//     const obj=request.body;
// console.log(obj)
//     userModels.create(obj).then(docs=>
//         {
//             response.send(obj)
//         })
// });
// module.exports=router;
const mongoose=require('mongoose')
const express =require('express')
const userModels=require('../model/userModel')
const router=express.Router();
const usercontroller=require('../controllers/usersController')
router.get('/user',usercontroller.getuser)

router.post('/user',usercontroller.addNewUser)
router.patch('/user/:userId',usercontroller.patchUser)
router.delete('/user/:userId',usercontroller.deletUser)


module.exports=router;

