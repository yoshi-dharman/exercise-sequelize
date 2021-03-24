const User = require('../models/user.model');

module.exports = {
    getAllUser: (req, res) => {
        User.findAll()
        .then( users => {
            res.json({
                message: "success",
                data: users
            });
        })
        .catch( e => {console.log(e)});
    },

    getAllUserByID: (req, res) => {
        User.findOne({
            where: { id: req.params.id}
        })
        .then( users => {
            if (users === null) {
                res.json({
                    message: "not found",
                });
            } else {
                res.json({
                    message: "success",
                    data: users
                });
            }
        })
        .catch( e => {console.log(e)});
    },

    addUser: (req, res) => {
        User.create(req.body)
        .then( newData => {
            res.status(200).json({
                message: "success add user",
                data: newData
            });
        })
        .catch( e => {console.log(e)});
    },

    updateUser: (req, res) => {
        User.update({name : req.body.name},{ 
            where: {id: req.params.id},
        })
        .then( result => {
            res.status(200).json({
                message: "success update user",
                data: result
            });
        })
        .catch( e => {console.log(e)})
    },

    deleteUser: (req, res) => {
        User.destroy({
                where : {id : req.params.id}
        })
        .then(newData => {
            res.status(200).json({
                message: "success delete user",
                data: newData
            });
        })
        .catch( e => {console.log(e)});
    },
}