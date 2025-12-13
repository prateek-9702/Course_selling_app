const express = require("express");
const app = express();

app.post("/user/signup", function(req, res) {
  res.json({
    message: "signup endpoint"
  })
})

app.post("/user/signin", function(res, req) {
  res.json({
    message: "signin endpoint"
  })
})

app.post("/user/purchases", function(res, req) {
  res.json({
    message: ""
  })
})

app.get("/course/purchases", function(res, req) {
  // you would expect the user to pay you money
  res.json({
    message: ""
  })
})

app.get("/courses", function(res, req) {
  res.json({
    message: ""
  })
})
app.listen(3000);

