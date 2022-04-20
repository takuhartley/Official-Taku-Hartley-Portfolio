import mongoose from "mongoose";
import dotenv from "dotenv";
import chalk from "chalk";

import users from "./data/users.js";
import projects from "./data/projects.js";
import User from "./models/userModel.js";
import Project from "./models/projectModel.js";

import connectDB from "./configuration/database.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    //remove all data
    await Project.deleteMany();
    await User.deleteMany();
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProjects = projects.map((project) => {
      return { ...project, user: adminUser };
    });
    await Project.insertMany(sampleProjects);
    console.log(chalk.underline.green("Data Imported Boss!"));
    process.exit();
  } catch (error) {
    console.error(chalk.underline.inverse.red(`${error}`));
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    //remove all data
    await Project.deleteMany();
    await User.deleteMany();
    console.log(chalk.underline.green("Data Destroyed Boss!"));
    process.exit();
  } catch (error) {
    console.error(chalk.underline.inverse.red(`${error}`));
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
