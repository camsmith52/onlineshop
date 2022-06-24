import React from "react";
import { useLocation } from "react-router-dom";
// import { GlobalState } from "../App";

const ItemInfo = () => {
  //State
  // const [itemsInBasket, setItemsInBasket, search, setSearch] =
  //   useContext(GlobalState);
  const item = useLocation(); //the useLocation hook here lets you pass props from the Navlink in Home.js
console.log(typeof item.itemProps.item.image);
  const itemInformation = (
    <div className="ui card">
      <div className="image">
        <img
          alt={item.itemProps.item.title}
          src={item.itemProps.item.image}
          width="250"
          height="100"
        />
      </div>
      <div className="content">
        <p className="header">{item.itemProps.item.title}</p>
        <div className="meta">
          <span className="date">{item.itemProps.item.description}</span>
        </div>
        <div className="description">${item.itemProps.item.price}</div>
      </div>
      <button
        className="ui button right"
        onClick={() => item.itemProps.itemAddedToBasket(item.itemProps.item)}
      >
        Add to cart
      </button>
    </div>
  );
  return <div>{itemInformation}</div>;
};

export default ItemInfo;
