import mongoose from "mongoose";
import chalk from "chalk";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(
      chalk.underline.bold.green(
        `MongoDB Connected To: ${conn.connection.host} Boss`
      )
    );
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
