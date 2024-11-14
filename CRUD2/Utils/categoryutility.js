const dotenv = require('dotenv');
dotenv.config();
const { mongoose } = require("mongoose");
const Category = require('../models/category.model');

// async function ConnectDB() {
//     await mongoose.connect(process.env.CON_STR)
// }

async function ModelCategory() {

    await Category.create([
        {
            "Name": "orange"
        },
        {
            "Id": "12",
        },
    ])
}

//CRUD
// Read 
async function Modelfind() {
    await Category.find({
        Name: "fruit"
    })
}

//Update
async function Modelupdate() {
    await Category.findOneAndUpdate(
        { "Name": "fruit" }, {
        "Name": "Apple"
    }
    )
}

//Delete
// async function Modeldelete() {
//     await Category.deleteOne(
//         { "Name": "monica" }
//     )
// }

module.exports = {
    //ConnectDB,
    ModelCategory,
    Modelfind,
    Modelupdate,
   //Modeldelete
}