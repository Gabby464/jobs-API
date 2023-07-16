const express = require('express');
const router = express.Router();
const {getAllJobsStatic, getAllJobs} = require('../controllers/jobs');

router.route('/').get(getAllJobs)
router.route('/static').get(getAllJobsStatic);

module.exports = router