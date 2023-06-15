const router = require("express").Router();
const mw = require("./users-middleware.js");
const userModel = require("./users-model.js");

router.get("/users", (req, res, next) => {
  try {
    const users = userModel.getUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
});
router.post(
  "/register",
  mw.payloadValidation,
  mw.usernameValidation,
  (req, res, next) => {
    try {
      const insertedUser = userModel.insertUser({
        username: req.body.username,
        password: req.body.password,
      });
      res.status(201).json(insertedUser);
    } catch (error) {
      next(error);
    }
  }
);
router.post("/login", mw.loginValidation, (req, res, next) => {
  try {
    res.json({ message: `hoş geldiniz ${req.body.username}` });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
