import React from "react";

function Stock({ stockData }) {

  const { ticker, name, price } = stockData;

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
