const axios = require('axios');

const events = [];

exports.eventBus = (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post('http://localhost:4000/events', event).catch((e) => {
    console.log(e.message);
  });

  axios.post('http://localhost:4001/events', event).catch((e) => {
    console.log(e.message);
  });

  axios.post('http://localhost:4002/events', event).catch((e) => {
    console.log(e.message);
  });

  axios.post('http://localhost:4003/events', event).catch((e) => {
    console.log(e.message);
  });

  res.send({ status: 'OK' });
};

exports.getEvents = (req, res) => {
  res.send(events);
};
