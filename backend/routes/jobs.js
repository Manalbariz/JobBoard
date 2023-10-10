const express = require('express')
const res = require('express/lib/response')
const job = require('../models/jobModel')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({mssg: 'Get all jobs'})
})

router.get('/:id', (req, res) => {
    res.json({mssg: 'singleAd'})
})

router.post('/newAd',async (req, res) => {
    const {Title, Description, Salary, Contract, Localisation, Booster } = req.body
    try{
        const ad = await job.create({Title, Description, Salary, Contract, Localisation, Booster })
        res.status(200).json(ad)
    }catch(error){
        res.status(400).json({error: error.message})
    }
    res.json({mssg: 'newAd'})
})
router.patch('/:id', (req, res) => {
    res.json({mssg: 'updtae ad'})
})
router.delete('/:id', (req, res) => {
    res.json({mssg: 'delete ad'})
})




module.exports = router