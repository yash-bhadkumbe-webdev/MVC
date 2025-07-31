const MvcStudnet = require('../models/model')
const {json} = require("express");
exports.getAllStudents=async(req,res)=>{
     const Studnet = await MvcStudnet.find()
     res.status(200).json(Studnet)
}
exports.createStudents = async(req,res)=>{
    const Studnet = new MvcStudnet(req.body)
    const saved = await Studnet.save()
    res.status(200).json(saved)
}
exports.updateStudents = async(req,res)=>{
    const update = await MvcStudnet.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(update)
}
exports.deleteStudents = async(req,res)=>{
    const Student_delete=await MvcStudnet.findByIdAndUpdate(req.params.id)
    json({message:"studnet deleted"})
}