const express = require('express');
const lorem = require('lorem-ipsum');

const lr = express();
const output = lorem();

lr.get('/lorem', function (req, res) {
  res.send(output);
});

lr.listen(3000, function () {
  console.log('Lorem Ipsum running!')
});
