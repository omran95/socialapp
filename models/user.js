var mongoose                = require("mongoose"),
    passportLocalMongoose   = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    firstName: String,
    lastName: String,
    password: String
});

userSchema.plugin(passportLocalMongoose,{usernameField: "email"});
module.exports = mongoose.model("User", userSchema);