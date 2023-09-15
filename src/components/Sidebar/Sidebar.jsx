const Sidebar = ({ selectedCourse }) => {
  return (
    <div className="bg-white rounded-xl">
      <h1 className="text-lg font-semibold text-blue-500 p-4 border-b-2">
        Credit Hour Remaining : 7 hr
      </h1>
      <h1 className="text-lg p-4 font-semibold border-b-2">Course Name :</h1>
      {selectedCourse?.map((item, i) => (
        <h1 key={i}>{i+1} {item?.title}</h1>
      ))}
      <p className="text-lg text-gray-500 p-4 font-semibold border-b-2">
        Total Credit Hour : 13
      </p>
      <p className="text-lg text-gray-500 p-4 font-semibold border-b-2">
        Total Price : 13000 USD
      </p>
    </div>
  );
};

export default Sidebar;
