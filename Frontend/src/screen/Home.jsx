import { useEffect, useState } from "react";
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
            <CustomSlider />
            <div className="mt-4 bg-orange-400 p-4">
                {FoodCate.length > 0 ? (
                    FoodCate.map((category) => (
                        <div key={category._id} className="mb-8">
                            <h2 className="text-2xl  mb-4 text-center bg-[#2F3645] uppercase rounded-sm text-white font-extrabold">{category.CategoryName}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                {FoodItem.length > 0 &&
                                    FoodItem.filter((item) => item.CategoryName === category.CategoryName)
                                        .map((filteredItem) => (
                                            <Card key={filteredItem._id} item={filteredItem}
                                            options={filteredItem.options[0]}
                                             />
                                        ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-xl">No categories available</div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
