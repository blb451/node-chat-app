// PATH CONFIG

const path = require('path');
const publicPath = path.join(__dirname, '../public');

// EXPRESS CONFIG

const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log(`Server running on ${port}`);
});

// GET /

app.get('/', (req, res) => {
  res.send('path/index.html')
})
