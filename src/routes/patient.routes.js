const router = require("express").Router();
const ctrl = require("./../controllers/patient.controller");
const { verifyJwtToken } = require("./../utils/token.utils");
const upload = require("./../utils/multer.utils")
const {
  signupPatientValidator,
} = require("../validators/auth.validator");
const { checkIfPatientExists } = require("../middlewares");

router.post("/create",  upload.single("photo"), [signupPatientValidator],checkIfPatientExists,verifyJwtToken, ctrl.create);

router.get("/getPsychatristList", verifyJwtToken, ctrl.getPsychatristList);

module.exports = router;
