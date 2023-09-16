import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Sidebar from "./components/Sidebar/Sidebar";
import toast from "react-hot-toast";

function App() {
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remaining, setRemaining] = useState(20);
  const [price, setPrice] = useState(0);

  const handleSelect = (card) => {
    const isAlreadySelected = selectedCourse.some(
      (item) => item.title === card.title
    );

    if (isAlreadySelected) {
      toast.error("You can't add the same course twice");
    } else if (remaining < card.credit_hr) {
      toast.error("Not enough remaining hours to add this course");
    } else {
      const newRemainingHour = remaining - card.credit_hr;
      setRemaining(newRemainingHour);

      const newSelectedCourse = [...selectedCourse, card];
      setSelectedCourse(newSelectedCourse);
      toast.success("Course select");

      const newCredit = credit + card.credit_hr;
      setCredit(newCredit);

      const newPrice = price + card.price;
      setPrice(newPrice);
    }
  };

  return (
    <div className="bg-gray-300">
      <div className="max-w-7xl mx-auto p-5">
        <h1 className="text-4xl font-bold text-center pb-10">
          Course Registration
        </h1>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-9">
            <Cards handleSelect={handleSelect} />
          </div>
          <div className="col-span-12 lg:col-span-3">
            <Sidebar
              price={price}
              remaining={remaining}
              credit={credit}
              selectedCourse={selectedCourse}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
