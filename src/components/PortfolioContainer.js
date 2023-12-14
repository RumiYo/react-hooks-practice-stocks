import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ selectedStock, onSellStock }) {

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        //render your portfolio stocks here
        selectedStock.map(stockData => <Stock stockData={stockData} onStockClick={onSellStock} key={stockData.id}/>)
      }
    </div>
  );
}

export default PortfolioContainer;
