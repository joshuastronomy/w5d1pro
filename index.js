const express = require('express');
const lorem = require('lorem-ipsum');

const lr = express();
const output = lorem({
  count: 3
, units: 'paragraphs'
, format: 'html'
});

lr.get('/lorem/', function (req, res) {
  res.send(output);
});

lr.get('/lorem/:id', function (req, res) {
  res.send(lorem({count : req.params.id, units: 'paragraphs', format: 'html'}));
});

lr.listen(3000, function () {
  console.log('Lorem Ipsum running!')
});
