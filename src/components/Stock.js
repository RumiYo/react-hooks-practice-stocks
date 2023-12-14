import React from "react";

function Stock({ stockData, onStockClick }) {

  const { ticker, name, price } = stockData;

  function selectStock(){
    const selectedStock = stockData;
    onStockClick(stockData);
  }

  return (
    <div>
      <div className="card" onClick={selectStock}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
