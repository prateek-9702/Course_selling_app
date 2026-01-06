const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const jwt = require("jsonwebtoken")
const JWT_ADMIN_PASSWORD = "jhyuyyijhyy"
// brcypt, zod, jsonwebtoken
const {JWT_ADMIN_PASSWORD} = require("../config") 


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


adminRouter.post("/course", adminMiddleware, async function(req, res){
  const adminId = req.userId;

  const { title, description, imageUrl, price } = req.body;
  const course = await courseModel.create({
    title, description, imageUrl, price, creatorId, adminId
  })
  res.json({
    message: "Course created",
    creatorId: course._id
  })
})

adminRouter.put("/course", function(res, req) {
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