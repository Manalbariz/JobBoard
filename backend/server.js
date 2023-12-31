require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

//import routes
const jobRoutes = require("./routes/jobs");
const userRoutes = require("./routes/users");

const app = express(); //express app

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  console.log(req.path, req.method);
  next();
});

// All routes
app.use("/api/jobs", jobRoutes); //routes for jobs
app.use("/api/users", userRoutes); //routes for jobs

mongoose
  .connect(process.env.MONGO_URI) //connect to database
  .then(() => {
    app.listen(process.env.PORT, () => {
      //listen for requests
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
