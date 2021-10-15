const express = require("express");
const carsRouter = require("./carsRouter");

const apiRouter = express.Router();

apiRouter.use("/cars", carsRouter);

module.exports = apiRouter;
