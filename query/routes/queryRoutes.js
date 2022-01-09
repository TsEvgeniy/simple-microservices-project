const express = require('express');

const queryController = require('../controllers/queryControllers');

const router = express.Router();

router.route('/posts').get(queryController.queryPosts);

router.route('/events').post(queryController.queryEvents);

module.exports = router;
