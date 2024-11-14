const dotenv = require('dotenv');
dotenv.config();
const { mongoose } = require("mongoose");
const Roll = require('../models/roll.model');



async function ModelRoll() {

    await Roll.create([
        {
            "Name": "orange"
        },
        {
            "Id": "19",
        },
    ])
}

//CRUD
// Read 
async function Modelfind() {
    await Roll.find({
        Name: "fruit"
    })
}

//Update
async function Modelupdate() {
    await Roll.findOneAndUpdate(
        { "Name": "fruit" }, {
        "Name": "Apple"
    }
    )
}

//Delete
// async function Modeldelete() {
//     await Roll.deleteOne(
//         { "Name": "monica" }
//     )
// }

module.exports = {
   // ConnectDB,
    ModelRoll,
    Modelfind,
    Modelupdate,
   //Modeldelete
}