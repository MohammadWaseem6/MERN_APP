import  { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CustomSlider from "../components/Slider";

const Home = () => {
    const [FoodCate, setFoodCate] = useState([]);
    const [FoodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:3000/api/FoodData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        });
        response = await response.json();
        setFoodItem(response[0]);
        setFoodCate(response[1]);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <Navbar />
            <div>
                <CustomSlider />
            </div>
            <div className="mt-4 bg-slate-400">
                {FoodCate.length > 0 ? (
                    FoodCate.map((category) => (
                        <div key={category._id}>
                            <h2>{category.CategoryName}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 rounded-sm font-semibold bg-orange-500">
                                {FoodItem.length > 0 &&
                                    FoodItem.filter((item) => item.CategoryName === category.CategoryName)
                                        .map((filteredItem) => (
                                            <Card key={filteredItem._id} item={filteredItem} />
                                        ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No categories available</div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
