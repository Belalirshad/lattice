const router = require("express").Router();
const { loginValidator } = require("../validators/auth.validator");
const ctrl = require("./../controllers/auth.controller");
const { checkIfUserExists } = require("./../middlewares/index");

router.post("/login", [loginValidator], checkIfUserExists, ctrl.login);

module.exports = router;
