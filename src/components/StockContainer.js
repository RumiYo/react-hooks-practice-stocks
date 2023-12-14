import React, { useState } from "react";
import Stock from "./Stock";

function StockContainer({ stockList, filter, sort, onStockSelect }) {

  let filteredList = stockList;
  let sortedList = stockList;

  if(filter!==""){
    filteredList = stockList.filter(item => item.type===filter)
  }
  
  if(sort==="Alphabetically"){
    sortedList = filteredList.sort((a,b) => {
      if (a.name < b.name){
        return -1;
      }
      if(a.name > b.name){
        return 1;
      }
      return 0;
    });
  }if(sort==="Price"){
    sortedList = filteredList.sort((a,b) => a.price - b.price );
  }
  
  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
      {sortedList.map(stockData => <Stock stockData={stockData} onStockClick={onStockSelect} key={stockData.id} />)}
    </div>
  );
}

export default StockContainer;
