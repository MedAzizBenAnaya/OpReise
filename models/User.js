const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mongoosePaginate = require('mongoose-paginate-v2');


const userSchema = new Schema({
    email: String,
    password: String


}, {timestamps: true});

userSchema.plugin(mongoosePaginate);


const User = mongoose.model('User', userSchema);
module.exports = User;

