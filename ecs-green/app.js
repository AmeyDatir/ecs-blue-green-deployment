const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ message: "Hello - I'm GREEN" });
});

app.listen(8081, () => {
  console.log("Green running");
});
