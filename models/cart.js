

var mongoose = require('mongoose');
const Schema = mongoose.Schema;


const cartSchema = new Schema({
    courseId: { type: String, required: true },
    userId: { type: String},
    courseName: { type: String},
    courseDescription: { type: String, },
    courseImage:{type:String},
    
}, { timestamps: true });

const cart = mongoose.model('Cart', cartSchema, 'carts');

module.exports=cart