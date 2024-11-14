const dotenv = require('dotenv');
dotenv.config();
const { mongoose } = require("mongoose");

const {ModelUser,Modelfind,Modelupdate,Modeldelete} =require('./Utils/userutility');
const { ModelProduct} =require('./Utils/productutility');
const {ModelRoll} =require('./Utils/rollutility');
const {ModelCategory} =require('./Utils/categoryutility');

// const User = require('./models/user.model');
async function ConnectDB() {
    await mongoose.connect(process.env.CON_STR)
}

ConnectDB().then(result=>{
    console.log("db connected")
 })


ModelUser().then(result=>{
    console.log("User")
})
ModelProduct().then(result=>{
    console.log("Product")
})
ModelRoll().then(result=>{
    console.log("Roll")
})
ModelCategory().then(result=>{
    console.log("Category")
})

//CRUD
Modelfind().then(result=>{
    console.log("find")
})

Modelupdate().then(result=>{
    console.log("update")
})

Modeldelete().then(result=>{
    console.log("delete")
})

