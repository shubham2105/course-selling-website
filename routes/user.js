const { Router } = require("express");
const userRouter = Router();
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "Rex@123";

userRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  //TODO: add zod validation
  //TODO:

  await userModel.create({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });
  res.json({
    message: "User Signup Endpoint",
  });
});

userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email: email, password: password });

  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_USER_PASSWORD
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect Credentials",
    });
  }
});

userRouter.get("/purchases", async (req, res) => {
  res.json({ message: "List of courses purchase" });
});

module.exports = {
  userRouter: userRouter,
};
