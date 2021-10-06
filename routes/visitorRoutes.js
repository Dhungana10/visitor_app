const express = require('express');
const router = express.Router();
const Visitor = require('../models/visitor');

// First index home page showing tables 
router.get('/visitors',async (req,res)=>{
    const visitors = await Visitor.find({});
    res.render('visitors/index',{visitors});
});

//Get into the new page
router.get('/visitors/new',(req,res)=>{
    res.render('visitors/new');
});

// Post the new visitor to the home page
router.post('/visitors',async(req,res)=>{
    const newVisitor={
        ...req.body
    }
  await Visitor.create(newVisitor);

  res.redirect('/visitors');
});

//Show the particular table
router.get('/visitors/:id',async(req,res)=>{
    const {id} = req.params;
    const visitor = await Visitor.findById(id);
    res.render('visitors/show',{visitor});
});


// Edit the form 
router.get('/visitors/:id/edit', async(req,res)=>{
    const {id} = req.params;
    const visitor =  await Visitor.findById(id);
    res.render('visitors/edit',{visitor});
});

//Get the form pre-filled
router.patch('/visitors/:id', async (req, res) => {
    
    const updatedVisitor = req.body;
    const { id } = req.params;

    await Visitor.findByIdAndUpdate(id, updatedVisitor);


    res.redirect(`/visitors/${id}`);
});

//Delete the components from the table
router.delete('/visitors/:id',async(req,res)=>{
    const {id} = req.params;
    await Visitor.findOneAndDelete(id);
    res.redirect('/visitors');
});

module.exports = router;
