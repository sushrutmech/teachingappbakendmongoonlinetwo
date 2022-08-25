

var mongoose = require('mongoose');
const Schema = mongoose.Schema;


const courseSchema = new Schema({
    courseName: { type: String, required: true },
    courseDescription: { type: String, },
    courseImage:{type:String},
    courseLike:[String],
    courseDislike:[String]
}, { timestamps: true });

const course = mongoose.model('Course', courseSchema, 'courses');

module.exports=course