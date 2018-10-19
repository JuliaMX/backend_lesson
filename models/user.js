// /backend/user.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//{ userId: 0, name: 'Ivan', age: 23 }
// this will be our data base's data structure
const UserSchema = new Schema(
    {
        userId: Number,
        name: String,
        age: Number
    },
    { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("User", UserSchema);