import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {

  const [selectedCourse, setSelectedCourse] = useState([]);
  // console.log(selectedCourse);

  const handleSelect = (card) => {
    const newSlectedCourse = [...selectedCourse, card]
    setSelectedCourse(newSlectedCourse)
  }

  return (
    <div className="bg-gray-300">
      <div className="max-w-7xl mx-auto px-5">
      <h1 className="text-4xl font-bold text-center pt-6 pb-10">
        Course Registration
      </h1>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-10">
          <Cards handleSelect={handleSelect}/>
        </div>
        <div className="col-span-2">
          <Sidebar selectedCourse={selectedCourse}/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
