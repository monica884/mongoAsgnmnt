const dotenv = require('dotenv');
dotenv.config();
const { mongoose } = require("mongoose");
const User = require("../models/product.model");
const Product = require('../models/product.model');

// async function ConnectDB() {
//     await mongoose.connect(process.env.CON_STR)
// }

async function ModelProduct() {

    await Product.create([
        {
            "Title": "fruit"
        },
        {
            "Description": "fruit description",
        },
        {
            "Category": "fresh",
        },
        {
            "Price": 1223
        }
    ])
}

//CRUD
// Read 
async function Modelfind() {
    await Product.find({
        Name: "fruit"
    })
}

//Update
async function Modelupdate() {
    await Product.findOneAndUpdate(
        { "Name": "fruit" }, {
        "Name": "Apple"
    }
    )
}

//Delete
// async function Modeldelete() {
//     await Product.deleteOne(
//         { "Name": "monica" }
//     )
// }

module.exports = {
  // ConnectDB,
    ModelProduct,
    Modelfind,
    Modelupdate,
   //Modeldelete
}