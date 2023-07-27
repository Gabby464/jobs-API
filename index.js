const dotenv = require("dotenv");
require("express-async-errors");
dotenv.config();

//security packages
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
const express = require("express");

const connectDB = require("./db/connect");
//routers
const jobsRouter = require("./routes/jobs");
const authRouter = require("./routes/auth");
const app = express();
//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
    res.send("it's working");
});

app.use(cors());
app.use("/jobs-api/v1/jobs", jobsRouter);
app.use("/jobs-api/v1/auth", authRouter);

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(notFoundMiddleware);
app.use(errorMiddleware);
app.use(helmet());
app.use(limiter);
app.set("trust proxy", 1);

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
