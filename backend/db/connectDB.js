import mongoose from "mongoose";

// const MongoUri = process.env.MONGO_URI;
const MongoUri = "mongodb+srv://bansalpratham8383:pratham@cluster0.sexkxsw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// console.log(MongoUri);

const connectDB = async () => {
	try {
		const conn = await mongoose.connect( MongoUri , {
			// To avoid warnings in the console
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

export default connectDB;
