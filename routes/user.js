
const { Router } = require("express");

const userRouter = Router();


  userRouter.post("/signup", (req, res) => {
  res.json({
    message: "signup endpoint"
  })
})

userRouter.post("/signin", (res, req)=> {
  res.json({
    message: "signin endpoint"
  })
})

userRouter.get("/purchases", (res, req)=> {
  res.json({
    message: ""
  })
})


module.exports= {
  userRouter: userRouter
}