const { Router } = require('express');
const UserController = require('../controllers/users');
const {body, check} = require('express-validator');
const validateRequest = require('../middlewares/request_validator');

const router = Router();

router.get('/', UserController.getUsers);
router.post('/',
    [
        check("email").not().isEmpty(),
        check("password").not().isEmpty(),
        validateRequest,
    ],
    UserController.createUser);
router.get('/:id', UserController.getUserById);
router.patch('/:id', UserController.updateUserById);

module.exports = router;


