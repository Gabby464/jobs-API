const Job = require("../models/job");
const getAllJobsStatic = async (req, res) => {
    res.status(200).json({ msg: "testinggg" });
};

const getAllJobs = async (req, res) => {
    const queryObject = req.query
    const jobs = await Job.find(queryObject);
    res.status(200).json(jobs);
};

const addJob = async (req, res) => {
    const newJob = await Job.create(req.body);
    res.json(newJob);
};

const getJob = async(req, res)=> {
    const id = req.params.id
    const job = await Job.findOne({_id : id});
    return res.json(job)
}



module.exports = {
    getAllJobs,
    getAllJobsStatic,
    addJob,
    getJob
};
