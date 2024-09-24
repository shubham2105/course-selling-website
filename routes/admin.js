const { Router } = require("express");
const adminRouter = Router();
const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWord = "Rex@215";
const { adminModel } = require("../db");

adminRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  await adminModel.create({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });
  res.json({
    message: "Admin Signup Endpoint",
  });
});
adminRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const user = await adminModel.findOne({ email: email, password: password });

  if (user) {
    const token = jwt.sign({ id: user._id }, JWT_ADMIN_PASSWord);
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect Credentials",
    });
  }
});
adminRouter.post("/createCourse", async (req, res) => {
  res.json({ message: "Course Creation Endpoint" });
});

adminRouter.put("/course", async (req, res) => {
  res.json({
    message: "Course Endpoint",
  });
});
module.exports = {
  adminRouter: adminRouter,
};
