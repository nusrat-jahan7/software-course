import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = ({handleSelect}) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="grid grid-cols-12 gap-6">
      {cards?.map((card) => (
        <Card handleSelect={handleSelect} key={card?.id} card={card}></Card>
      ))}
    </div>
  );
};

Cards.propTypes = {
  handleSelect: PropTypes.func,
}; 

export default Cards;
