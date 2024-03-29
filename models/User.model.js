const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required gundi..."],
        unique: true,
        lowercase: true,
        trim: true,
    },
    name: {
        type: String,
        required: [true, "Name is required goyluu..."]
    }
});

const User = model("User", userSchema)

module.exports = User;