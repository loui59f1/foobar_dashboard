import './App.css';

import { useState, useEffect } from "react";

import Header from "./Header.js";
import KPINumbers from "./KPI.js";
import Orders from "./Orders.js";
import Bartenders from "./Bartenders.js";
import Storage from "./Storage.js";
import prices from "./prices.json";

function App() {

  // Get data
  const [foobar, setFoobar] = useState({ storage: [], taps: [], queue: [], bartenders: [], bar: [] });
  // const [beerTypes, setBeerTypes] = useState({});
  // const [totalSales, setTotalSales] = useState("0");

  useFetch("https://dreaming-of-foobar.herokuapp.com");

  function useFetch(url) {
    useEffect(() => {
      async function fetchFromAPI() {
        console.log("fetching data")
        const json = await (await fetch(url)).json();
        setFoobar(json);
      }
      fetchFromAPI();
    }, [url]);

    return foobar;
  };



  // useEffect(() => {
  //   getData("https://dreaming-of-foobar.herokuapp.com");
  // }, []);

  // function getData(url) {

  //   fetch(url)
  //     .then((resp) => resp.json())
  //     .then((json) => {

  //       setFoobar(json);
  //       //tjekker hvert andet sekund
  //       setTimeout(() => {
  //         getData(url);
  //       }, 5000);
  //     });
  // }

  // Få lavet et array med samtlige total fra hver ordre, derefter reduce eller setTotalSales
  //const orders = foobar.queue.map(beer => beer.order);

  // console.log(orders);

  const allBeer = [];
  const duplicatesResult = {};

  foobar.queue.forEach((orders) => {
    orders.order.map((beer) => {
      allBeer.push(beer);

      return allBeer;
    });
  });

  allBeer.map((beer) => {
    duplicatesResult[beer] = (duplicatesResult[beer] || 0) + 1;
    return duplicatesResult;
  });

  const obj = Object.entries(duplicatesResult).map(([key, value]) => {
    return { value, name: key };
  });

  const allOrders = obj.map((order) => {
    //laver nyt object. Match mellem names
    const priceObject = prices.find((item) => item.name === order.name);
    //opretter en egenskab til beer der hedder pris
    order.price = priceObject.price * order.value;
    return order;
  });

  const allOrderPrices = allOrders.map(beer => beer.price);

  const totalAmount = allOrderPrices.reduce(
    (previousScore, currentScore, index) => previousScore + currentScore,
    0);

  // Beers served today



  return (
    <div>
      <Header bar={foobar.bar} />
      <div className="Dashboard">
        <KPINumbers totalAmount={totalAmount} queue={foobar.queue} />
        <Orders queue={foobar.queue} />
        <Bartenders bartenders={foobar.bartenders} />
      </div>
      <Storage taps={foobar.taps} storage={foobar.storage} />
    </div>
  );
}

export default App;
