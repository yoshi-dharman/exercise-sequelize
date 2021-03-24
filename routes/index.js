const express = require('express');
const router = express.Router();

const todoRouter = require("./todo.route");
const userRouter = require("./user.route");

//Routes
router.get('/', (req, res) => {
    res.json({
        message: "todo app, .../todo or .../user"
    })
});

router.use("/todo", todoRouter);
router.use("/user", userRouter);

module.exports = router;