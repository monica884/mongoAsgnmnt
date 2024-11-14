
const {ConnectDB,ModelUser,ModelPost, Modelfind,Modelupdate,Modeldelete}=require("./data/locationshander");
// const User = require("./model/user.model");

 ConnectDB().then(result=>{
     console.log("db Connected")
 })

 ModelUser().then(result=>{
     console.log( 'user added')
 })

 ModelPost().then(result=>{
     console.log('post added')
 })

 Modelfind().then(result=>{
    console.log('find method')
})

Modelupdate().then(result=>{
    console.log('update method')
})

Modeldelete().then(result=>{
    console.log('delete methode')
})