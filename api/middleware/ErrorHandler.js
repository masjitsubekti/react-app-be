// ErrorHandler.js
const ErrorHandler = (err, req, res, next) => {
  console.log("error", err.stack);
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: "Internal Server Error",
    stack: process.env.NODE_ENV === "development" ? errMsg : null,
    // stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};

module.exports = ErrorHandler;
