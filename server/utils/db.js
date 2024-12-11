import mongoose from 'mongoose';

const URI = process.env.MONGODB_URI;

const connectToDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection Success to DB");
  } catch (error) {
    console.log(error);
    console.error("Connection failed to DB");
    process.exit(0); //smoothly exit the process
  }
};

export default connectToDb;
