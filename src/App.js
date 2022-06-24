import React, { createContext, useState } from "react";
import MainNav from "./Navigation/MainNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ItemInfo from "./pages/ItemInfo";
import ShoppingCart from "./pages/ShoppingCart";
import Pay from "./pages/Pay";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

//Globalstate
export const GlobalState = createContext({});

function App() {
  //State used globally
  const [itemsInBasket, setItemsInBasket] = useState([]);
  const [search, setSearch] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loggedIn, setLoggedIn] = useState(false);
  //JSX
  return (
    <GlobalState.Provider
      value={[
        itemsInBasket,
        setItemsInBasket,
        search,
        setSearch,
        quantity,
        setQuantity,
      ]}
    >
      <Router>
        <MainNav
          search={search}
          setSearch={setSearch}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cart/pay" exact>
            <Pay loggedIn={loggedIn} />
          </Route>
          <Route path="/cart" exact>
            <ShoppingCart quantity={quantity} setQuantity={setQuantity} />
          </Route>
          <Route path="/login" exact>
            <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/signup" exact>
            <Signup loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          </Route>
          <Route>
            <ItemInfo path={`/:item-title/:item-id`} />
          </Route>
        </Switch>
      </Router>
    </GlobalState.Provider>
  );
}

export default App;
