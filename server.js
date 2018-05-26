const express = require('express');
const app = express();

// your code here!
app.use(express.json());
req.params: {
    "host": "https://orange-suit.glitch.me/",
    "query": {
        "cat": "meow",
        "dog": "woof"
    },
    "params": {
      "what": "pets"
    }}


app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
