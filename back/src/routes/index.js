const authRouter = require("./authRoutes");
const bookRouter = require("./bookRoutes");
const passwordRouter = require("./passwordRoutes");
const userRouter = require("./userRoutes");
const notFoundRouter = require("./notFoundRoutes");

const auth = require("../middlewares/auth")


const setUpRoutes = (server) => {
  server.use("/api/auth", authRouter);
  server.use("/api/book",auth, bookRouter);
  server.use("/api/user", userRouter);
  server.use("/api/password", passwordRouter);
  server.get("/*", notFoundRouter)
};

module.exports = {
  setUpRoutes,
};
