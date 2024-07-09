import image1 from "../assets/images/img1.jpg";

const Slider = () => {
    return (
        <div className="relative">
            <img
                src={image1}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Background"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative h-screen flex justify-center items-center text-white text-center">
                <div className="container mx-auto relative z-10">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-black px-4 py-2 rounded border border-gray-300 w-3/4 md:w-1/2 lg:w-1/3"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded ml-2">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;
