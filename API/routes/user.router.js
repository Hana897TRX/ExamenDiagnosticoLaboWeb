const express = require('express')
const UserService = require('../services/user.service')
const router = express.Router()

const service = new UserService()

router.get('/user', async (req, res) => {
    let response = await service.GetUsers()
    if(response) {
        console.log(response)
        res.status(200).json({'data' : response})
    }
    else {
        res.status(500).json({'error' : 'Server error'})
    }
})

router.get('/userPhone', async(req, res) => {
    let id = req.query.id
    if(id) {
        const response = await service.GetPhoneNumbers(id)
        if(response) {
            console.log(response)
            res.status(200).json({'data' : response})
        }
        else {
            res.status(500).json({'error' : 'Server error'})
        }
    }
    else {
        res.status(404).json({'error' : 'id not sent'})
    }
})

router.post('/user', async (req, res) => {
    let data = req.body
    const response = await service.SaveUser(data)
    res.status(200).json({'data' : response})
})

module.exports = router