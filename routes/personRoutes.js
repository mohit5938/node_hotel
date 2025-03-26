const express = require('express');
const router = express.Router();
const person = require('../models/person');

router.get('/:worktype', async (req, res) => {
    try {
        const worktype = req.params.worktype;
        if (worktype == "chef" || worktype == "manager" || worktype == "waiter") {
            const data = await person.find({ work: worktype });
            res.status(200).json(data);

        }
        else {
            res.status(404).json({ error: 'this is not worktype' });
        }
    } catch (error) {
        console.log('internal db problem');
        res.status(500).json({ error: "inernal problem in db" });
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await person.find();
        console.log("data fetched");
        res.status(200).json(data);
    }
    catch (err) {
        console.log("data not fetched");
        res.status(500).json(err);
    }
})

router.post('/', async (req, res) => {
    try {
        const data = req.body
        const newPerson = new person(data);


        const response = await newPerson.save();
        console.log("data saved");
        res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal server problem' });
    }
})

router.put('/:id', async(req,res)=>{
    try {
        const personid = req.params.id;
        const updatepersondata = req.body;
         
        const response = await person.findByIdAndUpdate(personid,updatepersondata,{
            new:true,
            runValidators:true,
        })

        if(!response){
            res.status(404).json({error:"persom is not found"});

        }

        console.log('data updated');
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal server problem' });
    }
})


router.delete('/:id',async (req,res)=>{
    try {
        const personid = req.params.id
        const response = await person.findByIdAndDelete(personid);
        if(!response){
            res.status(404).json({error:"persom is not found"});

        }

        console.log('person deleted');
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal server problem' });
    }
})
module.exports = router;