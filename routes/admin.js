const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
// brcypt, zod, 
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

adminRouter.post("/course", function(res, req) {
  res.json({
    message: ""
  })
})
adminRouter.put("/course", function(res, req){
  res.json({
    message: ""
  })
})
adminRouter.get("/course/bulk", function(res, req){
  res.json({
    message: ""
  })
})

module.exports = {
  adminRouter: adminRouter
}