import PropTypes from "prop-types";
import { FiDollarSign, FiBookOpen } from "react-icons/fi";

const Card = ({ card, handleSelect }) => {
  // console.log(card);

  const { title, cover_image, price, credit_hr } = card;

  return (
    <div className="col-span-12 sm:col-span-6 xl:col-span-4 p-6 bg-white rounded-xl">
      <img
        className="rounded-xl h-36 w-full object-cover"
        src={cover_image}
        alt=""
      />
      <h1 className="text-xl font-semibold pt-4 line-clamp-1">{title}</h1>
      <p className="pt-2 pb-4 text-gray-500">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <div className="flex justify-between pb-4 text-lg">
        <div className="flex items-center gap-1">
          <button>
            <FiDollarSign className="text-gray-500"></FiDollarSign>
          </button>
          <p className="text-gray-500 font-medium">Price : {price}</p>
        </div>
        <div className="flex items-center gap-1">
          <button>
            <FiBookOpen className="text-gray-500"></FiBookOpen>
          </button>
          <p className="text-gray-500 font-medium">Credit : {credit_hr}hr</p>
        </div>
      </div>
      <div className=" text-center w-full">
        <button
          onClick={() => handleSelect(card)}
          className="bg-sky-600 text-white text-2xl font-semibold w-full py-2 rounded-lg"
        >
          Select
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  handleSelect: PropTypes.func,
};

export default Card;
