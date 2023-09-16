import PropTypes from "prop-types";

const Sidebar = ({ selectedCourse, credit, remaining, price }) => {
  return (
    <div className="bg-white rounded-xl sticky top-10">
      {selectedCourse.length ? (
        <>
          <h1 className="text-lg font-semibold text-blue-500 p-4 text-center border-b-2">
            Credit hour remaining : {remaining}hr
          </h1>
          <h1 className="text-lg p-4 font-semibold text-center border-b-2 underline underline-offset-2">
            Course Name
          </h1>
          {selectedCourse?.map((item, i) => (
            <h1 className="px-4 py-2 font-semibold text-gray-500" key={i}>
              {i + 1} {item?.title}
            </h1>
          ))}
          <p className="text-lg text-gray-500 p-4 font-semibold border-t-2 border-b-2">
            Total Credit Hour : {credit}hr
          </p>
          <p className="text-lg text-gray-500 p-4 font-semibold">
            Total Price : {price} USD
          </p>
        </>
      ) : (
        <h1 className="text-lg font-semibold text-blue-500 p-4 text-center">
          Please add some course
        </h1>
      )}
    </div>
  );
};

Sidebar.propTypes = {
  selectedCourse: PropTypes.object.isRequired,
  credit: PropTypes.number,
  remaining: PropTypes.number,
  price: PropTypes.number,
};

export default Sidebar;
