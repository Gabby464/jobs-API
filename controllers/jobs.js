
const getAllJobsStatic = async (req, res) =>{
    res.status(200).json({msg: 'testinggg'})
}

const getAllJobs = async (req, res) =>{
    res.status(200).json({msg: 'actual route'})
}
module.exports = {
    getAllJobs,
    getAllJobsStatic
}