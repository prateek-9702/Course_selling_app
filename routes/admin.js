const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const jwt = require("jsonwebtoken")
const JWT_ADMIN_PASSWORD = "jhyuyyijhyy"
// brcypt, zod, 
adminRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastName} =  req.body

  await adminModel.create({
    email: email,
    password:password,
    firstName:firstName,
    lastName:lastName
  })
  res.json ({
    message: "signup succeeded"
  })
})

adminRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body

  const admin = await adminModel.findOne({
    email:email,
    password:password
  })

  if (admin) {
    const token = jwt.sign({
      id: admin._id

    }, JWT_ADMIN_PASSWORD);

    res.json({
      token:token
    })
  } else{
    res.status(403).json({
      message: "incorrect credentials"
    })
  }
  
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