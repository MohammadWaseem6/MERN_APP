import mongoose from "mongoose";
const mongoURI = "mongodb+srv://Foodie:foodie123@clusterfoodie.a6d9mhn.mongodb.net/FOODIEAPP?retryWrites=true&w=majority&appName=Clusterfoodie";



const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {

        });
        console.log("MongoDB Connected");

        const fetchData = mongoose.connection.db.collection("FoodItems");
        const data = await fetchData.find({}).toArray();
        console.log();
        global.FoodItems = data
        console.log(data);
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export default connectDB;
