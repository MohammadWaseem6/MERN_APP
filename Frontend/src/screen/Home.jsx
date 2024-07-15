import { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import image1 from '../assets/images/img1.jpg';

const Home = () => {
    const [search, setSearch] = useState('');
    const [FoodCate, setFoodCate] = useState([]);
    const [FoodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        try {
            let response = await fetch("http://localhost:3000/api/FoodData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            let data = await response.json();
            setFoodItem(data[0]);
            setFoodCate(data[1]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-slate-500">
            <Navbar />
            <div className="relative flex-1 ">
                <img
                    src={image1}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Background"
                />
                <div className="absolute inset-0 bg-black opacity-50 "></div>
                <div className="relative h-screen flex justify-center items-center text-white text-center">
                    <div className="container mx-auto relative z-10">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-black px-4 py-2 rounded border border-gray-300 w-3/4 md:w-1/2 lg:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-4 p-4 bg-transparent">
                {FoodCate.length > 0 ? (
                    FoodCate.map((category) => (
                        <div key={category._id} className="mb-8">
                            <h2 className="text-2xl mb-4 text-center bg-[#2F3645] uppercase rounded-sm text-white font-extrabold">
                                {category.CategoryName}
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                {FoodItem.length > 0 &&
                                    FoodItem.filter((item) => item.CategoryName === category.CategoryName && item.name.toLowerCase().includes(search.toLowerCase()))
                                        .map((filteredItem) => (
                                            <Card key={filteredItem._id} item={filteredItem} options={filteredItem.options[0]} />
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
