const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
const express = require("express");
const connectDB = require("./db/connect");
const app = express();
const dotenv = require('dotenv');
dotenv.config()

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
    res.send("it's working");
});

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
