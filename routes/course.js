const { Router } = require("express");

const courseRouter = Router();

 courseRouter.post("/purchases", function(res, req) {
  // you would expect the user to pay you money
  res.json({
    message: ""
  })
})
 courseRouter.get("/preview", function(res, req) {
  res.json({
    message: ""
  })
})

module.exports = {
  courseRouter: courseRouter
}