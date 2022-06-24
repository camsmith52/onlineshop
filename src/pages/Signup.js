import React from "react";
import { Link } from "react-router-dom";

const Signup = ({ loggedIn, setLoggedIn }) => {
  const login = () => {
    setLoggedIn(true);
  };

  return (
    <React.Fragment>
      <div className="ui middle aligned center aligned grid">
        <div className="5 column">
          <h2 className="ui teal image header">
            {/* <img alt="" src="assets/images/logo.png" className="image" /> */}
            <div className="content">Log-in to your account</div>
          </h2>
          <form className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input type="text" name="name" placeholder="name" />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input
                    type="text"
                    name="email"
                    placeholder="E-mail address"
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <Link to={"/"}>
                <button
                  onClick={login}
                  className="ui fluid large teal submit button"
                >
                  Signup
                </button>
              </Link>
            </div>

            <div className="ui error message"></div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
