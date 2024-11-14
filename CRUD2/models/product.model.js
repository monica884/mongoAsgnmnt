

const { SchemaTypes, Schema, model } = require("mongoose");

const productSchema = new Schema({
    "Title": {
        type: SchemaTypes.String,
        require: true,
    },
    "Description": {
        type: SchemaTypes.String,
        require: true,
    },
    "Category": {
        type: SchemaTypes.String,
        require: true,
    },
    "Price": {
        type: SchemaTypes.Number,
        require: true,
    },
    "createdAt": {
        type: SchemaTypes.Date,
        default: Date.now
    },
    // "user": {
    //     type:SchemaTypes.ObjectId,
    //     ref: 'User',
    // }
})

const Product = model("Product", productSchema);
module.exports = Product;