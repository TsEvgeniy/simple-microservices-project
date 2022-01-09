const express = require('express');

const eventBusController = require('../controllers/eventBusController');

const router = express.Router();

router
  .route('/events')
  .post(eventBusController.eventBus)
  .get(eventBusController.getEvents);

module.exports = router;
