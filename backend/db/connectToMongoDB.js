import mongoose from "mongoose";


const connectToMongoDB = async () => {
	try {
		// await mongoose.connect(process.env.MONGO_DB_URI);
		const conn = await mongoose.connect(process.env.MONGO_DB_URI);
		console.log(`Connected to MongoDB: ${conn.connection.host}`);
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
