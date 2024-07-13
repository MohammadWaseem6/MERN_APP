import PropTypes from "prop-types";
import image1 from "../assets/images/img1.jpg";

const Card = ({ item }) => {
  return (
    <div className="flex flex-col bg-gray-500 m-4 text-center text-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative overflow-hidden">
        <img
          src={image1}
          alt="Product"
          className="object-cover w-full h-48 sm:h-64 md:h-64 lg:h-64 xl:h-64"
        />
      </div>
      <div className="p-4">
        <h5 className="text-2xl font-semibold mb-2">{item.name}</h5>
        <p className="text-sm mb-4">{item.description}</p>

        <div className="flex items-center justify-between">
          <select className="bg-teal-400">
            {Array.from(Array(6), (e, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select className="text-black ml-2 bg-teal-400">
            <option value="size">Size</option>
            <option value="full">Full</option>
            <option value="half">Half</option>
          </select>
          <div className="font-semibold">Total Price</div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
