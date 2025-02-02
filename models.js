const mongoose = require("mongoose");
const { Schema } = mongoose;

const stockSchema = new Schema({
    symbol: { type : String, required: true},
    // name: { type : String, required: true},
    price: { type : Number, required: true},
    // change: { type : Number, required: true},
    // volume: { type : Number, required: true},
    // lastUpdated: { type : Date, required: true},
    likes: { type : [String], default: [] },
});
const Stock = mongoose.model("Stock", stockSchema);

exports.Stock = Stock;