const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routers/users")
const authRoute = require("./routers/auth")
const postRoute = require("./routers/posts")


dotenv.config();

mongoose.connect(process.env.MONGO_URL);

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);




app.listen(8800, ()=>{
    console.log("server running on port 8800");
})