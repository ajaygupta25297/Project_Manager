//Connection file to mongo db
import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
 mongoose
      .connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      })
      .then((conn) => {
        console.log(
          `MongoDB Connected: ${conn.connection.host}`.cyan.underline
        );
      })
      .catch((err) => {
        console.error(err);
      });
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

export default connectDB;
