
// Requiring module
const mongoose = require('mongoose');

autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);

// Phone Modal Schema
const phoneSchema = new mongoose.Schema({
    prefix: String,
    phoneNr: String,
    user: {
        type: mongoose.Schema.Types.Number,
        ref: "User"
    }
});
phoneSchema.plugin(autoIncrement.plugin, 'Phone');
const Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone