const router = require("express").Router();
const ctrl = require("./../controllers/auth.controller");

router.post("/login", checkIfUserExists, ctrl.login)