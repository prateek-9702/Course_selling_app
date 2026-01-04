
const { Router } = require("express");
const { userModel } = require("../db");
const userRouter = Router();
const jwt = require("jsonwebtoken")
const JWT_USER_PASSWORD = "aseraser"

  userRouter.post("/signup", async function (req, res) {
    const { email, password, firstName, lastName } = req.body;  // TODO: adding zod validation 
    // TODO: hash the password so plaintext password is not stored in db
    await userModel.create ({
      email: email,
      password: password,
      firstName:firstName,
      lastName:lastName
    })

  res.json({
    message: "signup succeeded"
  })
})

userRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;
// TODO: ideally password should be hashed, and hence you can't compare the user provide password and the database password 
  const user = await userModel.findOne({ 
    email:email,
    password: password
  });

  if (user) {
    const token = jwt.sign({
      id: user._id
    }, JWT_USER_PASSWORD);
    
      res.json({
        token:token
      })
  } else {
    res.status(403).json({
    message: "Incorrect credentials"
  })

  }

})

userRouter.get("/purchases", (res, req)=> {
  res.json({
    message: ""
  })
})


module.exports= {
  userRouter: userRouter
}