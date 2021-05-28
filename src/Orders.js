import React, { useState } from "react";
import gsap from "gsap";

export default function Orders({ queue }) {
  const [queueLength, setQueueLength] = useState(0);

  return (
    <div className="Orders">
      <h1>Incoming orders here</h1>
      <div className="orderlist">
        {queue.map((orders) => {
          const copyResult = {};
          orders.order.map(function (beer) {
            copyResult[beer] = (copyResult[beer] || 0) + 1;
            return copyResult;
          });

          //adding animation by checking length
          function checkQueueLength() {
            if (queueLength < queue.length || queueLength === 1) {
              gsap.fromTo(".order-card", { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 2 });
            } else {
              gsap.fromTo(".order-card", { opacity: 0.2 }, { opacity: 1, duration: 1 });
            }
            setQueueLength(queue.length);
          }

          queueLength !== queue.length ? checkQueueLength() : console.log("no");
          //

          return (
            <div className="order-card" key={orders.id}>
              <div>
                <h3 className="order-number"> {`ID #${orders.id}`}</h3>
              </div>
              <ul>
                {Object.entries(copyResult).map(([key, value]) => {
                  return (
                    <li key={orders.id + Math.random()} className="order-beer">
                      {value === 1 ? "1 x" : `${value} x`} {key}
                      {""}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
