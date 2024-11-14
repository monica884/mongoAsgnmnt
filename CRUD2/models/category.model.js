

const { SchemaTypes, Schema, model } = require("mongoose");

const categorySchema = new Schema({
    "Name": {
        type: SchemaTypes.String,
        require: true,
    },
    "Id": {
        type: SchemaTypes.Number,
        require: true,
    },
})

const Category = model("Category", categorySchema);
module.exports = Category;