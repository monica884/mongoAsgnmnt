const dotenv = require('dotenv');
dotenv.config();
const { mongoose } = require("mongoose");
const User = require("../models/user.model");

// async function ConnectDB() {
//     await mongoose.connect(process.env.CON_STR)
// }

async function ModelUser() {

    await User.insertMany([
        {
            "Name": "monica",
            "Email": "monicayounas10@gmail.com",
           // "Roll":"9",
            "Wishlist":['fruit','apple','mango']
        },
        {
            "Name": "Hina",
            "Email": "hinahina@gmail.com"
        },
        {
            "Name": "Huma",
            "Email": "Humhum123@gmail.com"
        },
    ])
}




//CRUD



// Read 
async function Modelfind() {
    await User.find({
        _id: "66df23da2929ff00c30fc5e0"
    })
}

//Update
async function Modelupdate() {
    await User.findOneAndUpdate(
        { "Name": "monica" }, {
        "Name": "Monica Younas"
    }
    )
}

//Delete
async function Modeldelete() {
    await User.deleteOne(
        { "Name": "monica" }
    )
}

module.exports = {
    //ConnectDB,
    ModelUser,
    Modelfind,
    Modelupdate,
    Modeldelete
}