import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalState } from "../App";

const ShoppingCart = ({ quantity, setQuantity }) => {
  //State
  const [itemsInBasket, setItemsInBasket] = useContext(GlobalState);

  //Delete helper function
  const deleteItem = (item, id) => {
    const indexOfDeletedItem = itemsInBasket.indexOf(item);
    itemsInBasket[indexOfDeletedItem].qty = 1;
    setItemsInBasket((prev) => prev.filter((item) => item.id !== id));
    if (itemsInBasket.length === 1) {
      setItemsInBasket([]);
    }
  };

  //Displays items in table in shopping cart
  const items = itemsInBasket.map((item) => {
    return (
      <tr key={item.id}>
        <td data-label="Name">{item.title}</td>
        <td data-label="Quantity">{item.qty} </td>
        <td data-label="Price">${item.price}</td>
        <td data-label="Total">${item.price* item.qty}</td>
        <td data-label="Remove">
          <button
            className="ui button center"
            onClick={() => {
              deleteItem(item, item.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  //Calculating cost of items
  let total = 0;
  // eslint-disable-next-line
  const totalCalc = itemsInBasket.forEach((element) => {
    const converted = Number(element.price * element.qty);
    total += converted;
  });

  //JSX
  return (
    <div>
      <p>You have the following</p>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>

      <p>Your total is ${total.toFixed(2)}</p>
      <button
        className="ui button"
        onClick={() => {
          itemsInBasket.forEach((item) => (item.qty = 1)); //   {/*Resets the quantities of the items that were in the basket to 1 */}
          setItemsInBasket([]);
        }}
      >
        Empty Cart
      </button>
      <NavLink to="/cart/pay">
        <button className="ui button">Pay here</button>
      </NavLink>
    </div>
  );
};

export default ShoppingCart;
