const express = require("express");

const router = express.Router();

// router.get("/", (req, res, next) => {
//   res.send("Hello users");
// });

router
    .route('/')
    .post((req, res, next) => {
        res.send("Hello users");
    })
    .get((req, res, next) => {
        res.locals.value = 3;
        res.locals.array = ['a', 'b', 'c', 'd'];
        res.render("index", { name: 'USER' });
    })
    .put((req, res, next) => {
        res.send("Hello users");
    });

module.exports = router;