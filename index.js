const isbot = require('isbot')
const express = require("express");
const app = express();

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
  if (isbot(req.get('user-agent'))) {
    res.render('./bot.ejs')
    return
  }
  res.render("./index.ejs")
});

app.listen(8000);