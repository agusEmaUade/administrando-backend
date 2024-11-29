const { Router } = require('express');
const NotifyController = require('../controllers/notify');
const multer = require('multer');

const router = Router();

router.post('/',
    NotifyController.sendEmail);


module.exports = router;