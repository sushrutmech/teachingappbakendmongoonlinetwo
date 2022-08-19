const { default: CustomErrorHandler } = require("../../service/customErrorHandler")


const User = require("../../models/users")
const JwtService = require('../../service/jwtService')
const bcrypt = require('bcrypt')
const Joi = require("joi");

const loginController = {
    async login(req, res, next) {
        console.log("login req", req.body)
        try {
            const user = await User.findOne({ email: req.body.email });
            if (!user) {

                return res.status(400).json({
                    working: 'invalide credential try to new register',
                    reqbody: req.body

                })
            }
            // compare the password
            const match = await bcrypt.compare(req.body.password, user.password);
            if (!match) {
                return res.status(400).json({
                    working: 'invalide credential',
                    reqbody: req.body

                })
            }

            // Toekn
            console.log("token ")
            const access_token = JwtService.sign({ _id: user._id, role: user.role });
            console.log("access_token", access_token)
            res.status(200).json({
                    working: 'login successfully',
                    reqbody:req.body,
                    access_token:access_token,
                    user:user
        
                })
           


        } catch (err) {
            return next(err);
        }






        // res.status(200).json({
        //     working: 'login working from controller',
        //     reqbody:req.body

        // })

    }
}

module.exports = loginController;