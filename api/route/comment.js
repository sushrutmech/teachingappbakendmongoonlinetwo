

const express = require('express');
const router = express.Router();
const auth = require("../../middlewares/auth")
const commentController = require("../../controllers/commentController/commentController")

router.post('/comments', commentController.addCommentController.addCommentController);
router.get('/comments', commentController.getAllCommentController.getComments);
router.delete('/comments', commentController.deleteCommentController.deleteCommentById);
//update comment route
router.patch('/updateComments', commentController.updateCommentController.updateCommentById);

module.exports = router;