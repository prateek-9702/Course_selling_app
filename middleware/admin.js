const jwt = require("jsonwebtoken")
const { JWT_ADMIN_PASSWORD } = require("../config")


function adminMiddleware(req, res, next){
  const token = req.header.token;
  const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD)
}

if (decode) {
    req.userId = decoded.id
    next()
} else {
  req.status(403).json({
    message:"You are not signend in "
  })
}
module.exports = {
  adminMiddleware: adminMiddleware
}