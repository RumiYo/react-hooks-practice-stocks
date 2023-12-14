import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [ stockList, setStockList] = useState([])
  const [ filter , setFilter ] = useState("");
  const [ sort, setSort ] = useState("");
  const [ selectedStock, setSelectedStock ] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then( r => r.json() )
    .then( data => {
      setStockList(data)
    })
  },[])

  function onFilterSelect(item){
    setFilter(item);
  }

  function onSortSelect(item){
    setSort(item);
  }

  function onStockSelect(stock){
    if(!selectedStock.includes(stock)){
      setSelectedStock([...selectedStock,stock])
    }
  }

  function onSellStock(stock){
    const newStockList = selectedStock.filter( item => item.id!==stock.id)
    setSelectedStock(newStockList)
  }

  return (
    <div>
      <SearchBar onSortSelect={onSortSelect} onFilterSelect={onFilterSelect}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={stockList} filter={filter} sort={sort} onStockSelect={onStockSelect} />
        </div>
        <div className="col-4">
          <PortfolioContainer selectedStock={selectedStock} onSellStock={onSellStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
