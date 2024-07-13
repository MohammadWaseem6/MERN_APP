import mongoose from "mongoose";

const mongoURI = "mongodb+srv://Foodie:foodie123@clusterfoodie.a6d9mhn.mongodb.net/FOODIEAPP?retryWrites=true&w=majority&appName=Clusterfoodie";

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, { });
        console.log("DATABASE CONNECTED");

        const db = mongoose.connection.db;
        const fetchData = db.collection("FoodItems");
        const data = await fetchData.find({}).toArray();
        const foodCategory = db.collection("FoodCategeory");
        const categoryData = await foodCategory.find({}).toArray();

        global.FoodItems = data;
        global.FoodCategeory = categoryData;

        // console.log(categoryData);
    } catch (err) {
        console.error("Database connection error:", err);
        throw err;
    }
};

export default connectDB;
