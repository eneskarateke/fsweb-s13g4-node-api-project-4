const userModel = require("./users-model");

function payloadValidation(req, res, next) {
  try {
    let { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({ message: "girilen alanları kontrol ediniz" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

function usernameValidation(req, res, next) {
  try {
    let { username } = req.body;
    const isExist = userModel
      .getUsers()
      .find((item) => item.username === username);
    if (isExist) {
      res.status(400).json({ message: "aynı kullanıcı adı mevcut." });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

function loginValidation(req, res, next) {
  try {
    let { username, password } = req.body;
    const isExist = userModel
      .getUsers()
      .find((item) => item.username === username && item.password == password);
    if (!isExist) {
      res.status(400).json({ message: "giriş bilgilerinizde hata var." });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { payloadValidation, usernameValidation, loginValidation };
