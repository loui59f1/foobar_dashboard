import "./sass/main.scss";
import React from "react";
import { useState, useEffect } from "react";

import Header from "./Header.js";
import KPINumbers from "./KPI.js";
import Orders from "./Orders.js";
import Bartenders from "./Bartenders.js";
import Storage from "./Storage.js";

function App() {
  const [foobar, setFoobar] = useState({
    storage: [],
    taps: [],
    serving: [],
    queue: [],
    bartenders: [],
    bar: [],
  });

  // Get data with useEffect

  useEffect(() => {
    function getData(url) {
      fetch(url)
        .then(resp => resp.json())
        .then(json => {
          setFoobar(json);
          setTimeout(() => {
            getData(url);
          }, 5000);
        });
    }
    getData("https://dreaming-of-foobar.herokuapp.com");
  }, []);

  return (
    <div>
      <Header foobar={foobar} />
      <div className="dashboard">
        <Orders queue={foobar.queue} />
        <Bartenders bartenders={foobar.bartenders} />
        <KPINumbers serving={foobar.serving} queue={foobar.queue} />
      </div>
      <Storage taps={foobar.taps} storage={foobar.storage} />
    </div>
  );
}

export default App;
