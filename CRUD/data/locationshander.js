const dotenv = require('dotenv');
dotenv.config();
const { mongoose } = require("mongoose");
const User = require("../model/user.model");
const Post = require("../model/post.model");

async function ConnectDB() {
    await mongoose.connect(process.env.CON_STR)
}

async function ModelUser() {

    await User.insertMany([
        {
            "Name": "monica",
            "Email": "monicayounas10@gmail.com"
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

// Create 
async function ModelPost() {
    await Post.create([
        { "Title": "monica123", "Contact": 1223343 },
        //populate("User")
    ])
}

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
    ConnectDB,
    ModelUser,
    ModelPost,
    Modelfind,
    Modelupdate,
    Modeldelete
}