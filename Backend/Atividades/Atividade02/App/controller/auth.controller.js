const jwt = require("jsonwebtoken");

module.exports.checar = (req, res, next) => {
  jwt.verify(req.headers.token, "secret", (err, decoded) => {
    if (err) {
      return res.status(401).json({
        title: "Não autenticado",
        error: err,
      });
    }
    next();
  });
};
