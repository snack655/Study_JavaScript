const express = require("express");
const sequelize = require("sequelize");

const router = express.Router();

// router.get("/", (req, res, next) => {
//   res.send("Hello users");
// });

const sequelize

db.sequelize = sequelize;

db.User = User;
db.Comment = Comment;

User.initiate(sequelize);
Comment.initiate(sequelize);

User.associate(db);
Comment.associate(db);

module.exports = db;