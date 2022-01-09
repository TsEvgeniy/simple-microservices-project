const express = require('express');

const commentController = require('../controllers/commentController');

const router = express.Router();

router
  .route('/posts/:id/comments')
  .get(commentController.allComments)
  .post(commentController.createComment);

router.route('/events').post(commentController.receiveEvent);

module.exports = router;
