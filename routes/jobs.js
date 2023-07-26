const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authentication");

const {
    getAllJobsStatic,
    getAllJobs,
    addJob,
    getJob, 
    editJob,
    deleteJob
} = require("../controllers/jobs");

router.route("/").get(getAllJobs);
router.route("/static").get(getAllJobsStatic);
router.route("/").post(authMiddleware, addJob);
router.route("/:id").get(getJob).patch(authMiddleware, editJob).delete(authMiddleware, deleteJob);

module.exports = router;
