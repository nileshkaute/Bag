import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/earphone-store";

mongoose.set("strictQuery", false);

mongoose
	.connect(MONGO_URI, {
		// Mongoose 6+ doesn't need these, but keep compatibility
		// useNewUrlParser: true,
		// useUnifiedTopology: true,
	})
	.then(() => console.log("🌱 Connected to MongoDB"))
	.catch((err) => {
		console.error("❌ MongoDB connection error:", err.message || err);
	});

export default mongoose;

