const {body, query} = require("express-validator");

exports.loginValidator = [
    body("name","Name field cannot be empty").not().isEmpty(),
    body("password","Password field cannot be empty").not().isEmpty()
];

exports.signupPatientValidator = [
    body("name","Name field cannot be empty").not().isEmpty(),
    body("address","Address field cannot be empty").not().isEmpty(),
    body("email","Email field cannot be empty").isEmail(),
    body("phone","Phone field cannot be empty").not().isEmpty(),
    body("password","Password field cannot be empty").not().isEmpty()
];