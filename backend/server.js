require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const routes = require("./routes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});