var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var schema = new Schema({
    companyemail : {type:String, require:true},
    companyname:{type:String,require:true},
    companyurl:{type:String,require:true},
    companycontact:{type:String,require:true},
    password:{type:String, require:true},
});

schema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

schema.methods.isValid = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}

module.exports = mongoose.model('Company',schema);