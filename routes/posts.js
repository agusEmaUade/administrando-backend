const { Router } = require('express');
const PostController = require('../controllers/posts');
const multer = require('multer');

const router = Router();

router.post('/',
    PostController.createPost);



module.exports = router;