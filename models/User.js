const mongoose = require('mongoose');
const User = mongoose.model('User', {
    firstName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },

    lastName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },

    isActive: {
        type: Number,
        default: 0
    }

});

module.exports = User;
