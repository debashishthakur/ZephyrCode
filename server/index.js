const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')
const db = require("./db.js");


app.use(cors({
    origin: '*'
}))
//Importing Routes
const jobsRoute = require("./routes/jobsRoute");
const userRoute = require("./routes/usersRoute");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Middlewares
app.use("/api/jobs/", jobsRoute);
app.use("/api/users/", userRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}🔥`));
