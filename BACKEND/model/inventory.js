const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inventorySchema = new Schema({

    item : {
        type : String,
        required: true,

    },
    quantity : {
        type :Number,
        required :true,

    },
    ex_date : {
        type :String,
        required :true,
    },
    mf_date : {
        type :String,
        required :true,
    },
    status : {
        type :String,
        required :true,
    }

})

const Inventory = mongoose.model("Inventory",inventorySchema);

module.exports = Inventory;