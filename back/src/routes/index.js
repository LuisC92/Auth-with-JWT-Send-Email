const authRouter = require("./authRoutes");
const bookRouter = require("./bookRoutes");
const passwordRouter = require("./passwordRoutes");
const userRouter = require("./userRoutes");
const notFoundRouter = require("./notFoundRoutes");

const setUpRoutes = (server) => {
  server.use("/api/auth", authRouter);
  server.use("/api/book", bookRouter);
  server.use("/api/user", userRouter);
  server.use("/api/password", passwordRouter);
  server.get("/*", notFoundRouter)
};

module.exports = {
  setUpRoutes,
};
