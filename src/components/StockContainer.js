import React from "react";
import Stock from "./Stock";

function StockContainer({ stockList }) {
  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
      {stockList.map(stockData => <Stock stockData={stockData} key={stockData.id} />)}
    </div>
  );
}

export default StockContainer;
