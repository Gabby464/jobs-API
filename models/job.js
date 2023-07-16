const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "job title must be provided"],
    },
    location: {
        type: String,
        enum: {
            values: [
                "Sofia, Bulgaria",
                "NYC, USA",
                "Paris, France",
                "London, UK",
                "Plovdiv, Sofia",
                "Madrid, Spain",
            ],
            message: "{VALUE} is not a known location",
        },
        required: [true, "location must be provided"],
    },
    category: {
        type: String,
        enum: {
            values: [
                "Design & Engineering",
                "HR",
                "Customer Support",
                "Sales & Marketing",
                "BI",
                "Management",
                "Information Security",
            ],
            message: "{VALUE} is not a department of the company",
        },
        required: [true, "category must be provided"],
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
    description: {
        type: String,
        required: [true, "category must be provided"],
    },
});

module.exports = mongoose.model('Job', jobSchema)