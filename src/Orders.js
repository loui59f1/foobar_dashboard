import { useState } from "react";
import gsap from "gsap";

export default function Orders({ queue }) {
  const [queueLength, setQueueLength] = useState(0);

  return (
    <div className="orders card">
      <h1>Orders</h1>
      <div className="order_queue">
        <p>
          In queue <span className="queue_number">{queue.length}</span>
        </p>
      </div>
      <div className="overlay_orders"></div>
      <div className="orderlist disable-scrollbars">
        {queue.map((orders) => {
          const copyResult = {};
          orders.order.map(function (beer) {
            copyResult[beer] = (copyResult[beer] || 0) + 1;
            return copyResult;
          });

          function checkQueueLength() {
            //add animation if queLength is less than .length or equal
            if (queueLength < queue.length || queueLength === 1) {
              gsap.fromTo(".order-card", { opacity: 0 }, { opacity: 1, duration: 2 });
            } else {
              gsap.fromTo(".order-card", { opacity: 0.2 }, { opacity: 1, duration: 2 });
            }

            //set new queuelength
            setQueueLength(queue.length);
          }

          //queuelength state is 0 , check if it has changed
          if (queueLength !== queue.length) {
            checkQueueLength();
          }

          return (
            <div className="order-card" key={orders.id}>
              <div>
                <h3 className="order-number"> {`#${orders.id}`}</h3>
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
