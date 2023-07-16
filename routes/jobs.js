const express = require("express");
const router = express.Router();
const {
    getAllJobsStatic,
    getAllJobs,
    addJob,
    getJob, 
} = require("../controllers/jobs");

router.route("/").get(getAllJobs);
router.route("/static").get(getAllJobsStatic);
router.route("/").post(addJob);
router.route("/:id").get(getJob);

module.exports = router;
