const mongoose = require('mongoose');

const menuItem = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true
    },
    isdrink:{
        type:Boolean,
        default:false,
    },
    ingredients:{
        type:[String],
        default:[]
    },
    numsales:{
type:Number,
default:0,
    }
});

const menus = new mongoose.model('menus',menuItem);
module.exports=menus;