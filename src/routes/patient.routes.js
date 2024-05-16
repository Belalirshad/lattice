const router = require("express").Router();
const ctrl = require("./../controllers/patient.controller");
const {verifyJwtToken} = require("./../utils/token.utils");

router.post("/create", verifyJwtToken, ctrl.create);

router.get("/getPsychatrist", verifyJwtToken, ctrl.getPsychatrist);


module.exports = router;