
const Comment = require("../../models/comment")


const getAllCommentController = {
    async getComments(req, res, next) {
        console.log("get all comments contoller")
        try {
            await Comment.find({}).select('-__v').then(ress => {
                console.log("get all comments database successfulley ",)
                res.status(200).send(ress) 
            }).catch(ress => {
                console.log("get all comments database failled ", ress)
                res.status(500).json({
                    error: 'get all comments database unsuccessful error in db ......',
                })
            });

        } catch (error) {
            return res.status(500).json({
                error: 'get all comments error to get comment list catchBlock ......',
            })
        }
    }

}

const addCommentController = {
    async addCommentController(req, res, next) {
        console.log("add comment contoller")
        console.log("add comment contoller", req.body)
        const { body, parentId, userName, userId, courseId, createdAt } = req.body;
        const comment = new Comment({
            body, parentId, userName, userId, courseId, createdAt
        })
        try {

            await comment.save().then(ress => {
                console.log("add comment in database successfulley ", ress)
                res.status(200).json({
                    success: 'add comment in Database successfully ......',
                })
            }).catch(ress => {
                console.log("add comment in database failled ", ress)
                res.status(500).json({
                    error: 'add comment in Database unsuccessful error in db ......',
                })
            });



        } catch (err) {
            return res.status(500).json({
                error: 'add comment in Database unsuccessful error in db catch ......',
            })
        }
    }

}


const updateCommentController = {
    async updateCommentById(req, res, next) {

        console.log("update comment contoller", req.body)
        const {Id , body}=req.body
        console.log("id ff", Id)

        Comment.findByIdAndUpdate(Id, {
            body: body,
        }).then(ress => {
            console.log("update comment in database successfulley ", ress)
            res.status(200).json({
                success: 'update comment in Database successfully ......',
                response:ress
            })
        }).catch(ress => {
            console.log("update comment in database failled ", ress)
            res.status(500).json({
                error: 'update comment in database unsuccessful error in db ......',
            })
        });

        // try {

        //     await Comment.findByIdAndUpdate(ID, {
        //         body: body,
        //     }).then(ress => {
        //         console.log("update comment in database successfulley ", ress)
        //         res.status(200).json({
        //             success: 'update comment in Database successfully ......',
        //             response:ress
        //         })
        //     }).catch(ress => {
        //         console.log("update comment in database failled ", ress)
        //         res.status(500).json({
        //             error: 'update comment in database unsuccessful error in db ......',
        //         })
        //     });

        // } catch (err) {
        //     return res.status(500).json({
        //         error: 'update course in Database unsuccessful error in db catch ......',
        //     })
        // }

    }


}


const deleteCommentController = {
    async deleteCommentById(req, res, next) {
        console.log("delete comment contoller")
        console.log("delete comment contoller ==>", req.body)
        const { Id, courseName, courseDescription, courseImage } = req.body;

        try {

            await Comment.findByIdAndDelete(Id).then(ress => {
                console.log("delete comment in database successfulley ", ress)
                res.status(200).json({
                    success: 'delete comment in Database successfully ......',
                })
            }).catch(ress => {
                console.log("delete comment in database failled ", ress)
                res.status(500).json({
                    error: 'delete comment in Database unsuccessful error in db ......',
                })
            });

        } catch (err) {
            return res.status(500).json({
                error: 'delete comment in Database unsuccessful error in db catch ......',
            })
        }
    }


}

module.exports = {
    getAllCommentController, addCommentController,
    updateCommentController, deleteCommentController
}

