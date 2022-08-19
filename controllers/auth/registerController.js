const { default: CustomErrorHandler } = require("../../service/customErrorHandler")


const User = require("../../models/users")
const JwtService = require('../../service/jwtService')
const bcrypt = require('bcrypt')

const registerController = {
    async register(req, res, next) {
        console.log('register body', req.body)
        console.log('email form body', req.body.email)
        const exist = await User.exists({ email: req.body.email });
        if (exist) {
            console.log("exist block")
            return res.send('This email is already taken.');
        }
        //check user already in database or not 
        // try {
        //     const exist = await User.exists({ email: req.body.email });
        //     if (exist) {
        //         console.log("exist block")
        //         return next(CustomErrorHandler.alreadyExist('This email is already taken.'));
        //     }
        // } catch(err) {
        //     console.log("in catch block ..." , err)
        //     return next(err);
        // }

        const { userName, lastName, email, password, userRole, userImage, } = req.body;
        console.log("pass", password)

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("hash pass", hashedPassword)

        // prepare the model


        const user = new User({
            userName, lastName, email, password: hashedPassword, userRole, userImage,
        })
        console.log("new user ++++", user)
        let access_token;
        try {
            const result = await user.save();
            console.log(result);
            //Json web token 
            access_token= JwtService.sign({_id:result._id, role:result.role}); 
            



        } catch (err) {
            return next(err);
        }






        res.status(200).json({
            working: 'register working from controller',
            reqq: req.body,
            userFordb: user,
            access_token:access_token
        })

    }
}

module.exports = registerController;