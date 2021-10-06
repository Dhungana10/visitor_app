const mongoose = require ('mongoose');


const visitorSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true
    },
    number:{
        type: Number,
        trim: true
    },
    // img:{
    //     type: String,
    //     default: './images/visitor.jpg'
    // },
    desc:{
        type: String,
        trim: true
    },
    email:{
        type: String,
        trim: true
    },
    etime:{
        type:String,
        trim: true
    },
    edate:{
        type:String,
        trim:true
    }

});

const Visitor = mongoose.model('Visitor', visitorSchema);

module.exports = Visitor;