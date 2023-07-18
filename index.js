const dotenv = require('dotenv');
require('express-async-errors')
dotenv.config()
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
const express = require("express");
const connectDB = require("./db/connect");
const jobsRouter = require('./routes/jobs')
const authRouter = require('./routes/auth')
const app = express();

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
    res.send("it's working");
});

app.use('/jobs-api/v1', jobsRouter)
app.use('/jobs-api/v1/auth', authRouter)


app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log.bind(console, `${port}`));
    } catch (error) {
        console.log(error);
    }
};
start();
