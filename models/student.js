var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var schema = new Schema({
    studentname:{type:String,require:true},
    studentid:{type:String,require:true},
    studentCGPA:{type:String,require:true},
    password:{type:String, require:true},
    FE:{type:Boolean,required:false},
    SE:{type:Boolean,required:false},
    TE:{type:Boolean,required:false},
    BE:{type:Boolean,required:false},
    COMP:{type:Boolean,required:false},
    IT:{type:Boolean,required:false},
    ENTC:{type:Boolean,required:false},
    resume:{type:String,required:true},
});

module.exports = mongoose.model('Student',schema);