const express = require("express");
const router = express.Router();

let wordCounter = {
  ali: 1,
};

router.get("/sanity", function (req, res) {
  res.send("Server up and running");
});

router.get("/word/:word", function (req, res) {
  const word = req.params.word;
  if (wordCounter.hasOwnProperty(word)) {
    console.log({ count: wordCounter[word] });
    res.send({ count: wordCounter[word] });
  } else {
    console.log({ count: 0 });
    res.send({ count: 0 });
  }
});

router.post("/word", function (req, res) {
  const word = req.body.word;
  if (wordCounter.hasOwnProperty(word)) {
    wordCounter[word]++;
  } else {
    wordCounter[word] = 1;
  }
  console.log({ text: word, currentCount: wordCounter[word] });
  res.send({ text: word, currentCount: wordCounter[word] });
  res.end();
});

router.post("/words", function (req, res) {
  const sentence = req.body.sentence;
  let numNewWords = 0;
  let numOldWords = 0;
  sentence.forEach((word) => {
    if (wordCounter.hasOwnProperty(word)) {
      wordCounter[word]++;
      numOldWords++;
    } else {
      wordCounter[word] = 1;
      numNewWords++;
    }
  });
  console.log({
    text: `Added ${numNewWords} words, ${numOldWords} already existed`,
    currentCount: -1,
  });
  res.send({
    text: `Added ${numNewWords} words, ${numOldWords} already existed`,
    currentCount: -1,
  });
});

router.delete("/words/:word", function (req, res) {
  const routeWord = req.params.word;
  if (wordCounter[routeWord]) {
    delete wordCounter[routeWord];
  } else {
    throw Error(`${routeWord} doesn't exists Error 404 Not Found`);
  }
  res.end();
});

module.exports = router;
