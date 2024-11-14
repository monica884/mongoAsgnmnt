

const { SchemaTypes, Schema, model } = require("mongoose");

const postSchema = new Schema({
    "Title": {
        type: SchemaTypes.String,
        require: true,
    },
    "contact": {
        type: SchemaTypes.Number,
        require: true,
    },
    "createdAt": {
        type: SchemaTypes.Date,
        default: Date.now
    },
    "user": {
        type:SchemaTypes.ObjectId,
        ref: "User",
        require:true,
    }
})

const Post = model("Post", postSchema);
module.exports = Post;