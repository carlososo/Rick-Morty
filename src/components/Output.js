import React from "react";

export const Output = ({ weather, country }) => {
  weather = Math.floor(weather);

  return (
    <div className="row">
      <div
        className="hoverable  col s4 offset-s4 "
        style={{ backgroundColor: "white", opacity: 0.9 }}
      >
        <h3>{country ? country : "loading..."}</h3>
        <h3>{weather ? weather : ""} °</h3>
      </div>
    </div>
  );
};
