const express = require('express');
const lorem = require('lorem-ipsum');

const lr = express();
const output = lorem({
  count: 3                      // Number of words, sentences, or paragraphs to generate.
, units: 'paragraphs'            // Generate words, sentences, or paragraphs.
, sentenceLowerBound: 5         // Minimum words per sentence.
, sentenceUpperBound: 15        // Maximum words per sentence.
, paragraphLowerBound: 3        // Minimum sentences per paragraph.
, paragraphUpperBound: 7        // Maximum sentences per paragraph.
, format: 'html'
});

lr.get('/lorem', function (req, res) {
  res.send(output);
});

lr.listen(3000, function () {
  console.log('Lorem Ipsum running!')
});
