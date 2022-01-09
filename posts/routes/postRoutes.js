const express = require('express');

const postController = require('../controllers/postController');

const router = express.Router();

router
  .route('/posts')
  .get(postController.allPosts)
  .post(postController.createPost);

router.route('/events').post(postController.receiveEvent);

module.exports = router;
