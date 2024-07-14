/* eslint-disable react/prop-types */
const Card = ({ item, options }) => {
  if (!item) {
      console.error("Card component received undefined or null item");
      return null;
  }

   let priceOptions = Object.keys(options || {});

  return (
      <div className="h-auto bg-teal-900 gap-4 p-4 text-center text-white rounded-lg relative">
          <div className="overflow-hidden rounded-lg h-[200px] mb-4">
              <img
                  src={item.img}
                  alt={item.name}
                  className="object-cover w-full h-full"
              />
          </div>
          <h5 className="text-2xl font-bold uppercase">{item.name}</h5>
          <p className="text-sm mt-2 mb-4 font-semibold text-gray-300">{item.description}</p>
          <div className="flex items-center justify-center space-x-2">
              <select className="text-black p-1 rounded">
                  {Array.from(Array(6), (e, i) => (
                      <option key={i + 1} value={i + 1}>
                          {i + 1}
                      </option>
                  ))}
              </select>
              <select className="text-black p-1 rounded">
                  {priceOptions.map((data) => (
                      <option key={data} value={data}>{data}</option>
                  ))}
              </select>
              <div className="ml-2 font-semibold">Total Price</div>
          </div>
      </div>
  );
};

export default Card;
