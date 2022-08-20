


var mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    body: { type: String, required: true },
    userName: { type: String, },
    userId:{type:String},
    parentId:{type:String},
    courseId:{type:String},
    createdAt:{type:String},
}, { timestamps: true });

const comment = mongoose.model('Comment', commentSchema, 'comments');

module.exports=comment