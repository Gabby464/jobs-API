const Job = require("../models/job");
const StatusCodes = require("http-status-codes");
const { NotFoundError } = require('../errors')

const getAllJobsStatic = async (req, res) => {
    res.status(200).json({ msg: "testinggg" });
};

const getAllJobs = async (req, res) => {
    const queryObject = req.query;
    const jobs = await Job.find(queryObject);
    res.status(StatusCodes.OK).json(jobs);
};

const addJob = async (req, res) => {
    const newJob = await Job.create(req.body);
    
    res.status(StatusCodes.OK).json({ newJob });
};

const getJob = async (req, res) => {
    const id = req.params.id;
    const job = await Job.findOne({ _id: id });
    if (!job) {
        throw new NotFoundError(`No job with id ${id}`)
      }
    return res.status(StatusCodes.OK).json({ job });
};

const editJob = async (req, res) => {
    const id = req.params.id;
    const job = await Job.findByIdAndUpdate({ _id: id }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!job) {
        throw new NotFoundError(`No job with id ${id}`)
      }
    return res.status(StatusCodes.OK).json({ job });
};

const deleteJob = async (req, res) => {
    const id = req.params.id;
    const job = await Job.findByIdAndRemove({
        _id: id,
    });
    if (!job) {
        throw new NotFoundError(`No job with id ${id}`)
      }
    return res.status(StatusCodes.OK).send();
};

module.exports = {
    getAllJobs,
    getAllJobsStatic,
    addJob,
    getJob,
    editJob,
    deleteJob
};
