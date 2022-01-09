const express = require('express');

const moderationController = require('../controllers/moderationController');

const router = express.Router();

router.route('/events').post(moderationController.moderation);

module.exports = router;
