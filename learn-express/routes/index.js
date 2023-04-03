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
        res.send("Hello users");
    })
    .put((req, res, next) => {
        res.send("Hello users");
    });

module.exports = router;