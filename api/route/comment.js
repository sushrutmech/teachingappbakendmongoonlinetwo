

const express = require('express');
const router = express.Router();
const auth = require("../../middlewares/auth")
const commentController = require("../../controllers/commentController/commentController")

router.post('/comments',auth, commentController.addCommentController.addCommentController);
router.get('/comments',auth, commentController.getAllCommentController.getComments);
router.delete('/comments',auth, commentController.deleteCommentController.deleteCommentById);
//update comment route
router.post('/updateComments',auth, commentController.updateCommentController.updateCommentById);

module.exports = router;