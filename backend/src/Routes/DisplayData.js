const express = require('express')
const router = express.Router()


router.get('/food_items', (req,res)=>{
    try {
        res.send([global.food_items,global.food_category])
    } catch (error) {
        console.log('Display data error : ',error)
        res.send('Server err')
    }
})

module.exports = router