const mongoose = require('mongoose')

const MvcSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    RollNo:{
      type:String,
      required:true,
      unique:true
    },
    age:{
        type:String
    },
    Branch:{
        type:String,
        required:true
    }
})

module.exports= mongoose.model('MVC',MvcSchema)