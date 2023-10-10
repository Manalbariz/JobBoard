const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const { createJob, getAllJobs, getSingleJob, deleteJob, updateJob } = require("../controllers/jobController");

router.get("/", getAllJobs);

router.get("/:id", getSingleJob);

router.post("/newAd", createJob);

router.patch("/:id", updateJob);

router.delete("/:id", deleteJob);

module.exports = router;
