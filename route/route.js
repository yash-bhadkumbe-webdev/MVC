const express = require('express')
const {
    getAllStudents,
    createStudents,
    updateStudents,
    deleteStudents
}=require('../controller.js/controller')
const router = express.Router()
router.get('/',getAllStudents)
router.post('/create',createStudents)
router.put('/:id',updateStudents)
router.delete('/:id',deleteStudents)

module.exports=router