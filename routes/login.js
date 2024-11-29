const { Router } = require("express");
const UserController = require("../controllers/users");
const { body, check } = require("express-validator");
const validateRequest = require("../middlewares/request_validator");

const router = Router();

router.post(
  "/login",
  [
    check("email").not().isEmpty(),
    check("password").not().isEmpty(),
    validateRequest,
  ],
  UserController.getUserByEmailAndPassword
);

router.post(
  "/register",
  [
    check("email").not().isEmpty(),
    check("password").not().isEmpty(),
    validateRequest,
  ],
  UserController.createUser
);

router.post(
  "/recover-password",
  [
    check("email").isEmail().withMessage("Please provide a valid email."),
    validateRequest,
  ],
  UserController.recoverPassword
);
module.exports = router;
