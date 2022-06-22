import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { GlobalState } from "../App";

const MainNav = ({ search, setSearch, setLoggedIn, loggedIn }) => {
  //State
  let [itemsInBasket] = useContext(GlobalState);

  //JSX
  return (
    <React.Fragment>
      <div className="ui menu">
        <div className="item">
          <div className="ui primary button black">
            <Link
              onClick={(e) => setSearch("")}
              to={"/"}
              style={{ color: "black" }}
            >
              Home
            </Link>
          </div>
        </div>
        <div className="item">
          <div className="ui button">
            <NavLink to={"/cart"}>
              <i className="shopping cart icon"></i>
              {itemsInBasket.length}
            </NavLink>
          </div>
        </div>
        {!loggedIn && (
          <div className="item ">
            <div className="ui button">
              <NavLink to={"/signup"}>Signup</NavLink>
            </div>
          </div>
        )}
        {!loggedIn && (
          <div className="item right">
            <div className="ui button">
              <NavLink to={"/login"}>Login</NavLink>
            </div>
          </div>
        )}
        {loggedIn && (
          <div className="item right">
            <div className="ui button">
              <NavLink onClick={() => setLoggedIn(false)} to={"/login"}>
                Logout
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default MainNav;
