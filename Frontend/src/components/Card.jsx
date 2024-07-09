
import image1 from "../assets/images/img1.jpg";

const Card = () => {
  // const quantityOptions = [];
  // for (let i = 1; i <= 6; i++) {
  //     quantityOptions.push(<option key={i} value={i}>{i}</option>);
  // }

  return (
    <div className="grid sm:grid-cols-5 gap-4 rounded-sm font-semibold bg-orange-500">
      <div className="min-h-[150px] bg-gray-500 m-4 text-center text-white p-4 relative">
        <div className="overflow-hidden rounded-lg">
          <img
            src={image1}
            alt="Product"
            className="object-cover w-full h-full"
          />
        </div>
        <h5 className="text-3xl font-semibold mt-4">TITLE</h5>
        <p className="text-sm mt-2">
          This is the description. This is the description.
        </p>
        <div className="flex items-center mt-2">
          <select className="bg-teal-400">
            {/* {quantityOptions} */}
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
          <div className=" ml-2 font-semibold">Total Price</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
