const express = require('express');
const app = express();

// your code here!
app.get('/', (req, res) => res.json({
    "host": "your-glitch-subdomain.glitch.me",
    "query": {
        "cat": "meow",
        "dog": "woof"
    },
    "params": {
      "what": "pets"
    }
}));

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
