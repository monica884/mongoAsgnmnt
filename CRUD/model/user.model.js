const { SchemaTypes,Schema, model } =require("mongoose");



const userSchema=new Schema({
    "Name":{
        type:SchemaTypes.String,
        require:true,
        minLength:1,
        maxLength:15
    },
    "Email":{
        type:SchemaTypes.String,
        require:true,
    },
    "createdAt":{
        type:SchemaTypes.Date,
        default:Date.now
    }
});
const User = model("User",userSchema);

module.exports=User