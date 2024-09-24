const { Router } = require("express");
const courseRouter = Router();
const { courseModel } = require("../db");
courseRouter.get("/preview", async (req, res) => {
  res.json({
    message: "All courses being sold",
  });
});

courseRouter.get("/purchases", async (req, res) => {
  res.json({
    message: "Courses purchased",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
