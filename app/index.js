require('dotenv').config();
const express = require('express');
const cors = require('cors');
const os = require('os');
const app = express();
const PORT = process.env.PORT || 9376;

app.use(cors());

app.get('/', function(req, res, next) {
  console.log(os.hostname());
  res.send(`${os.hostname()}`);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
