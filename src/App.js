import './App.css';

import { useState, useEffect } from "react";

import Header from "./Header.js";
import KPINumbers from "./KPI.js";
import Orders from "./Orders.js";
import Bartenders from "./Bartenders.js";
import Storage from "./Storage.js";

function App() {

  // Get data
  const [foobar, setFoobar] = useState({ storage: [], taps: [], queue: [], bartenders: [], bar: [] });

  useEffect(() => {
    getData("https://dreaming-of-foobar.herokuapp.com");
  }, []);

  function getData(url) {
    console.log("test")

    fetch(url)
      .then((resp) => resp.json())
      .then((json) => {
        setFoobar(json);

        //tjekker hvert andet sekund
        setTimeout(() => {
          getData(url);
        }, 5000);
      });
  }

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
