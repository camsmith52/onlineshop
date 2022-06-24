import React from 'react'

const Loader = () => {
  return (
    <div className="ui segment">
      <div className="ui active dimmer">
        <div className="ui huge text loader">Loading</div>
      </div>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
}

export default Loader