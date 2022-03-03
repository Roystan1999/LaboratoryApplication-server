const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SampleData=new Schema({
    patientname: {type:String},
    mail:{type:String},
    HaematologyStatus: {type:String},
    glucometryStatus:{type:String},
    ThyroidStatus:{type:String},

    Haematology:[{
        haemoglobin:{
            type:String,
            required:true
        } , 
        totalCount:{
            type:String,
            required:true
        },
        neutrophills:{
            type:String,
            required:true
        },
        lymphocytes:{
            type:String,
            required:true
        },
        eosinophiles:
        {
            type:String,
            required:true
        },
        monocytes:{
            type:String,
            required:true
        },
        basophills:{
            type:String,
            required:true
        },
        redblood:{
            type:String,
            required:true
        },
        packedcell:{
            type:String,
            required:true
        },
        mean:{
            type:String,
            required:true
        }
    }],

    glucometry:[{
    fasting:{
        type:String,
        required:true
    },
    postPandial:{
        type:String,
        required:true
    },
    hba1c:{
        type:String, 
        required:true
    },
    calcium:{
        type:String, 
        required:true
    } 

    }],
   Thyroid:[{
    thyronine:{ type:String, required:true},
    thyroxine:{ type:String, required:true },
    harmone:{type:String, required:true
    }
   }]

})

const Sample=mongoose.model("sampleData",SampleData)

module.exports=Sample