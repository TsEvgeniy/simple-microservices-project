const axios = require('axios');
const app = require('./app');

const queryController = require('./controllers/queryControllers');

const port = 4002;

app.listen(4002, async () => {
  console.log('Listening on 4002');
  try {
    const res = await axios.get('http://localhost:4005/events');

    for (let event of res.data) {
      console.log('Processing event:', event.type);

      queryController.handleEvent(event.type, event.data);
    }
  } catch (error) {
    console.log(error.message);
  }
});
