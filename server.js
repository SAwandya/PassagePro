const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const user = require("./routes/user");
const auth = require("./routes/auth");
require("./config/passport");
const passport = require("./config/passport");
const facebookPassport = require("./config/passport-facebook");
require("dotenv").config();
const session = require("express-session");
const path = require("path");
const swaggerDocs = require("./swagger");
const route = require("./routes/route");

const mongo_url = process.env.MONGO_URL;

mongoose
  .connect(mongo_url)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

app.use(cors());

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use(
  session({
    secret: "Awandya2000#",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === "production" },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(facebookPassport.initialize());
app.use(facebookPassport.session());

swaggerDocs(app);

app.use("/api/user", user);
app.use("/api/auth", auth);

app.use("/api/routes", route)

// Serve static files from the React frontend
app.use(express.static(path.join(__dirname, "../frontend/dist"))); // or "../frontend/dist" if "dist" is your build output

// Catch-all route to serve index.html for any non-API requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));