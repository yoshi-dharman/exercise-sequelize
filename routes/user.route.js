const express = require('express');
const { route } = require('.');
const router = express.Router();

const { getAllUser, getAllUserByID, addUser, updateUser, deleteUser } = require("../controllers/user.controller");

router.get('/', getAllUser);
router.get('/:id', getAllUserByID);
router.post('/', addUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;