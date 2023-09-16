import PropTypes from "prop-types";
import { FiDollarSign, FiBookOpen } from "react-icons/fi";

const Card = ({ card, handleSelect }) => {
  // console.log(card);

  const { title, cover_image, price, credit_hr } = card;

  return (
    <div className="col-span-4 p-6 bg-white rounded-xl">
      <img
        className="rounded-xl h-36 w-full object-cover"
        src={cover_image}
        alt=""
      />
      <h1 className="text-2xl font-semibold pt-2 line-clamp-1">{title}</h1>
      <p className="py-4 text-lg font-semibold text-gray-500">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <div className="flex justify-between pb-4 text-lg">
        <div className="flex gap-2">
          <button>
            <FiDollarSign></FiDollarSign>
          </button>
          <p className="font-semibold text-gray-500">Price : {price}</p>
        </div>
        <div className="flex gap-2">
          <button>
            <FiBookOpen></FiBookOpen>
          </button>
          <p className="font-semibold text-gray-500">Credit : {credit_hr}hr</p>
        </div>
      </div>
      <div className=" text-center w-full">
        <button onClick={() => handleSelect(card)} className="bg-sky-600 text-white text-2xl font-semibold w-full py-2 rounded-lg">
          Select
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  handleSelect: PropTypes.func
};                                                          

export default Card;
