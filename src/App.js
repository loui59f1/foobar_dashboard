import './App.css';

import { useState, useEffect } from "react";

import Header from "./Header.js";
import KPINumbers from "./KPI.js";
import Orders from "./Orders.js";
import Bartenders from "./Bartenders.js";
import Storage from "./Storage.js";
// import prices from "./prices.json";

function App() {

  // Get data
  const [foobar, setFoobar] = useState({ storage: [], taps: [], queue: [], bartenders: [], bar: [] });
  // const [totalSales, setTotalSales] = useState();

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

  useFetch("https://dreaming-of-foobar.herokuapp.com");

  function useFetch(url) {
    useEffect(() => {
      async function fetchFromAPI() {
        const json = await (await fetch(url)).json();
        setFoobar(json);
      }
      fetchFromAPI()
    }, [url]);

    return foobar;
  };


  // Få lavet et array med samtlige total fra hver ordre, derefter reduce eller setTotalSales
  // const orders = foobar.queue.map(beer => beer.order);
  // console.log(orders);



  // Array med alle priser lagt sammen - brug noget ala det her
  // const totalArr = basket.map((beer) => {

  //   const orderTotalPrice = beer.amount * beer.product.price;

  //   return orderTotalPrice;
  // });

  //const beersFromStorage = foobar.storage.map(beer => beer.name);


  return (
    <div>
      <Header bar={foobar.bar} />
      <div className="Dashboard">
        <KPINumbers queue={foobar.queue} />
        <Orders queue={foobar.queue} />
        <Bartenders bartenders={foobar.bartenders} />
      </div>
      <Storage taps={foobar.taps} storage={foobar.storage} />
    </div>
  );
}

export default App;
