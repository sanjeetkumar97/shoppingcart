var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Profile = new Schema({  
    fname: { type: String},  
    lname: { type: String},   
    email: { type: String}, 
    pwd: { type: String}, 
    gen: { type: String},
    cartItems:[]
});

module.exports = mongoose.model('Profile', Profile);