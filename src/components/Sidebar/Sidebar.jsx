const Sidebar = ({ selectedCourse, credit, remaining }) => {

  return (
    <div className="bg-white rounded-xl">
      <h1 className="text-lg font-semibold text-blue-500 p-4 border-b-2">
        Credit Hour Remaining : {remaining} hr
      </h1>
      <h1 className="text-lg p-4 font-semibold border-b-2">Course Name :</h1>
      {selectedCourse?.map((item, i) => (
        <h1 className="p-4 text-gray-400" key={i}>                      
          {i + 1} {item?.title}
        </h1>
      ))}
      <p className="text-lg text-gray-500 p-4 font-semibold border-t-2 border-b-2">
        Total Credit Hour : {credit}hr         
      </p>
      <p className="text-lg text-gray-500 p-4 font-semibold">
        Total Price : 13000 USD
      </p>
    </div>
  );
};

export default Sidebar;
