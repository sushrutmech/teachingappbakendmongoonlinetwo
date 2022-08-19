const express = require('express');
const loginController = require('../../controllers/auth/loginController');
const router = express.Router();
const registerController = require('../../controllers/auth/registerController');
const userController = require('../../controllers/auth/userController');
const auth = require("../../middlewares/auth")

router.post('/register', registerController.register)
router.post('/login', loginController.login)
router.get('/me',auth, userController.me)




module.exports = router;