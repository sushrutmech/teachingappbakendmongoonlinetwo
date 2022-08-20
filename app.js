const express = require('express');

const app = express();
const bodyParser = require('body-Parser');
var mongoose = require('mongoose');
const mainRouter = require('./api/route/main');
const authRouter = require("./api/route/auth");
const manageUserRouter = require("./api/route/manageUser");
const manageCourseRouter = require("./api/route/manageCourse");
const commentsRouter = require("./api/route/comment");

var url = "mongodb://localhost:27017/mydb2";

mongoose.connect(url);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
//console.log(db.on('error', console.error.bind(console, 'connection error:')))
db.once('open', () => {
  console.log('DB connected...!!!!!!!!!');
});




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use('/main' , mainRouter);
app.use('/auth' , authRouter);
app.use('/users',manageUserRouter);
app.use('/course',manageCourseRouter);
app.use('/conversation',commentsRouter);

app.use('/' , (req , res ,next )=>{
    
    console.log('this controller is hitted')
    res.status(404).json({

        error: 'page is not found 404 error and you hitted wrong url'
    })
})


module.exports = app;