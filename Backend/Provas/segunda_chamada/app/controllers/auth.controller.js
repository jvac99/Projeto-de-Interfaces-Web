const jwt = require("jsonwebtoken");

module.exports.checar = (req, res, next) => {
  jwt.verify(req.headers.token, "secret", (error, decoded) => {
    if (error) {
      return res.status(401).json({
        title: "Not Authenticated",
        error: error,
      });
    }
    next();
  });
};
