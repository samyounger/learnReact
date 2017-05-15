const express = require("express");

const app = express();
const PORT = process.env.PORT || 8000;

// redirects to http if on https
app.use(function(req, res, next) {
  if (req.headers["x-forwarded-proto"] === "http") {
    next();
  } else {
    res.redirect(`http://${req.hotname}${req.url}`);
  }
});

app.use(express.static("public"));

app.listen(PORT, function() {
  console.log(`Express server is up on port ${PORT}`);
})
