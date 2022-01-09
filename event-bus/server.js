const app = require('./app');

const port = 4005;

app.listen(port, () => {
  console.log(`EVENT-BUS listening on ${port} port...`);
});
