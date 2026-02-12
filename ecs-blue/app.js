const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ message: "Hello - I'm BLUE" });
});

app.listen(8081, () => {
  console.log("Blue running");
});
