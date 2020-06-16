var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schema = new Schema({
    companyname:{type:String,require:true},
    studentid:{type:String,require:true},
    studentCGPA:{type:String,require:true},
    studentname:{type:String,require:true},
    resume:{type:String,require:true},
    year:{type:String,require:true},
    branch:{type:String,require:true},
    selected:{type:Boolean,require:false},
    msg:{type:String,require:false}
});

module.exports = mongoose.model('Appliedinternship',schema);