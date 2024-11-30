const { Router } = require('express');
const UserController = require('../controllers/users');
const {body, check} = require('express-validator');
const validateRequest = require('../middlewares/request_validator');
const authenticateToken = require('../middlewares/authMiddleware');

const router = Router();

router.get('/', UserController.getUsers);
router.post('/',
    [
        check("email").not().isEmpty(),
        check("password").not().isEmpty(),
        validateRequest,
    ],
    UserController.createUser);
router.get('/:id', authenticateToken, UserController.getUserById);
router.patch('/:id', authenticateToken, UserController.updateUserById);

module.exports = router;


