const mongoose=require('mongoose');
const nodemon = require('nodemon');

const Schema = mongoose.Schema;

const patientSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    mobileNo:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    tags:{
       type:Array,
       required:true
    },
    medication:{
       type:String,
       required:true
    },
    city:{
        type:String,
        required:true
    },
    AdharNo:{
        type:String
    },
    date:{
        type:String,
        required:true
    }

})
                             //name to import, schema , db name 
module.exports=mongoose.model('patients',patientSchema,'Patients');