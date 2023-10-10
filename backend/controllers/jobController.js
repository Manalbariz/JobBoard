const jobModel = require("../models/jobModel");
const job = require("../models/jobModel");
const mongoose = require("mongoose");

//get all jobs
const getAllJobs = async (req, res) => {
  const jobs = await job.find({}).sort({ createdAt: -1 }); // get all jobs. use job.find({Title: "job1"}) to get a specific job
  res.status(200).json(jobs);
};

// get single job
const getSingleJob = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Job does not exist" });
  }

  const singleJob = await job.findById(id);

  if (!singleJob) {
    return res.status(404).json({ error: "Job does not exist" });
  }
  res.status(200).json(singleJob);
};

// create a new job
const createJob = async (req, res) => {
  const { Title, Description, Salary, Contract, Localisation, Booster } =
    req.body;
  try {
    const ad = await job.create({
      Title,
      Description,
      Salary,
      Contract,
      Localisation,
      Booster,
    });
    res.status(200).json(ad);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a job
const updateJob = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Job does not exist" });
  }
  const job = await jobModel.findOneAndUpdate(
    { _id: id },
    {
      ...req.body, // spread operator : copy all the properties of req.body to the findOneAndUpdate object.
    }
  );
  if (!job) {
    return res.status(404).json({ error: "Job does not exist" });
  }
  res.status(200).json({ message: "Job updated successfully" });
};

// delete a job
const deleteJob = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Job does not exist" });
  }

  const job = await jobModel.findOneAndDelete({ _id: id });

  if (!job) {
    return res.status(404).json({ error: "Job does not exist" });
  }

  res.status(200).json({ message: "Job deleted successfully" });
};

module.exports = {
  createJob,
  getAllJobs,
  getSingleJob,
  deleteJob,
  updateJob,
};
