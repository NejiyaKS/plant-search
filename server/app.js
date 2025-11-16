const express = require("express");
const cors = require("cors");
const plantRoutes = require("./routes/plantroutes");

const app = express();
app.use(cors());
app.use("/api", plantRoutes);

module.exports = app;