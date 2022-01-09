const app = require('./app');

const port = 4001;

app.listen(port, () => {
  console.log(`COMMENT listening on ${port} port...`);
});
