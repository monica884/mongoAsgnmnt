

const { SchemaTypes, Schema, model } = require("mongoose");

const rollSchema = new Schema({
    "Name": {
        type: SchemaTypes.String,
        require: true,
    },
    "Id": {
        type: SchemaTypes.Number,
        require: true,
    },
})

const Roll = model("Roll", rollSchema);
module.exports = Roll;