
const express = require('express');
const router = express.Router();
const auth = require("../../middlewares/auth")
const manageCourseController = require("../../controllers/manageCoursesControllers/manageCourseController")

router.get('/courses' ,auth, manageCourseController.getCoursesController.getCourses)
router.post('/addCourse',auth, manageCourseController.addCourseController.addCourse)
router.post('/deleteCourse',auth, manageCourseController.deleteCourseController.deleteCourseById)
router.post('/updateCourse',auth, manageCourseController.updateCourseController.updateCourseById)
router.post('/addCourseToCart',auth, manageCourseController.addCourseToCart.addCourseToCart)
router.delete('/deleteCourseFromCart',auth, manageCourseController.deleteCourseFromCart.deleteCourseFromCart)

module.exports = router;