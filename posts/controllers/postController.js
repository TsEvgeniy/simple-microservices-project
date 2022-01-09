const { randomBytes } = require('crypto');
const axios = require('axios');

const posts = {};

exports.allPosts = (req, res) => {
  res.send(posts);
};

exports.createPost = async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  await axios.post('http://localhost:4005/events', {
    type: 'PostCreated',
    data: {
      id,
      title,
    },
  });

  res.status(201).send(posts[id]);
};

exports.receiveEvent = (req, res) => {
  console.log('Received Event', req.body.type);
  res.send({});
};
