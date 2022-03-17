const express=require('express');
const router=express.Router()

const data=require('../controllers/Patients');
const filteredData=require('../controllers/filterData')
const modifyData=require('../controllers/modifyData')
const deleteData=require('../controllers/deleteData')

router.get('/test',data.patientsData)
router.post('/addData',data.addData)
router.get('/filter',filteredData.datafilteration)
router.put('/modifyData/:_id',modifyData.modifyData)
router.delete('/deleteData/:_id',deleteData.deleteData)

// export the router
module.exports = router; 