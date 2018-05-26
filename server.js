const express = require('express');
const app = express();

// your code here!

app.get('/echo:what', (req, res) => {res.json({
    host: res.host,
    query: req.query,
    params: req.params,
});
});


app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
