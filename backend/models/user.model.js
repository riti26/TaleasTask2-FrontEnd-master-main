
// Requiring module
const mongoose = require('mongoose');

autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);

// User Modal Schema
const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phones: [{
        type: mongoose.Schema.Types.Number,
        ref: "Phone"
    }],
    website: String
});

userSchema.plugin(autoIncrement.plugin, 'User');
const User = mongoose.model('User', userSchema);

module.exports = User