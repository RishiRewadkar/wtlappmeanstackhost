var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schema = new Schema({
    companyname:{type:String,require:true},
    aboutinternship:{type:String,require:true},
    durationofinternship:{type:String,require:true},
    startinternship:{type:Date,required:true},
    applybefore:{type:Date,required:true},
    internshipemail:{type:String,required:true},
    FE:{type:Boolean,required:false},
    SE:{type:Boolean,required:false},
    TE:{type:Boolean,required:false},
    BE:{type:Boolean,required:false},
    COMP:{type:Boolean,required:false},
    IT:{type:Boolean,required:false},
    ENTC:{type:Boolean,required:false},
    // CGPA:{type:Number,required:true}
});



module.exports = mongoose.model('Internship',schema);