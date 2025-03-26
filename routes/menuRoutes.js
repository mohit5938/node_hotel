const express =   require('express');
const router = express.Router();
const menu = require('../models/menu');

router.get('/' , async (req,res)=>{
    try {
        const data = await menu.find();
        console.log('data are send to clint')
        res.status(200).json(data);
    } catch (error) {
        console.log('internal db problem');
        res.status(500).json({error:"inernal problem in db"});
    }
})

router.post('/', async (req,res)=>{
    try {
        const data = req.body
        const newmenu = new menu(data);
        const response = await newmenu.save();
        console.log('data is saved');
        res.status(200).json(response);
    } catch (error) {
        console.log('data not saved');
        res.status(500).json(error);
    }
})

router.get('/:taste', async (req,res)=>{
try {
    const testtype = req.params.taste;
    if(testtype == "sour" || testtype == "sweet"){
        const data = await menu.find({taste:testtype});
        res.status(200).json(data);
    }
    else {
        res.status(404).json({ error: 'this is not testtype' });
    }
} catch (error) {
    console.log('data not saved');
    res.status(500).json(error);
}
});


module.exports = router;