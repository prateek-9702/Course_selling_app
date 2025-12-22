const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");

adminRouter.post("/signup", function (res, req) {
  res.json ({
    message: "signup endpoint"
  })
})

adminRouter.post("/signin", function (res, req) {
  res.json({
    message: "signin endpoint"
  })
})

adminRouter.post("/", function(res, req) {
  res.json({
    message: ""
  })
})
adminRouter.put("/", function(res, req){
  res.json({
    message: ""
  })
})
adminRouter.get("/bulk", function(res, req){
  res.json({
    message: ""
  })
})

module.exports = {
  adminRouter: adminRouter
}