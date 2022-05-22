import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import connectDB from "./configuration/database.js";

// @routes
import projectRoutes from "./routes/projectRoutes.js";

dotenv.config();

// Connect to DB
connectDB();


const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Working API");
});

app.use("/api/projects", projectRoutes);

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;

app.listen(
  PORT,
  console.log(
    chalk.underline.bold.green(
      `Server running well in ${MODE} mode on port ${PORT} Boss`
    )
  )
);

process.on("SIGTERM", () => {
  server.close(() => {
    console.log(
      chalk.inverse.underline.bold.red("PROCESS WAS TERMINATED YOU FOOL")
    );
  });
});
