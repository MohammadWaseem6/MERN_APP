import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CustomSlider from "../components/Slider";
const Home = () => {
    return (
        <div>
            <Navbar />
            <div>
                <CustomSlider/>
            </div>    
            <div >
                <Card />           
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
