const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const userSchema=new Schema({
    _id:{
        type:Schema.Types.ObjectId,
    },
    fullName:{type:String},
    location:{type:String},
    position:{type:String},
    salary:{type:Number}
})
const userModel=mongoose.model('users',userSchema)
module.exports=userModel;