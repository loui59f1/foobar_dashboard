import React from "react";

export default function Orders({ queue }) {

    return (
        <div className="Orders">
            <h1>Incoming orders</h1>
            <div className="orderlist">
                {queue.map((orders) => {
                    const copyResult = {};
                    orders.order.map(function (beer) {
                        copyResult[beer] = (copyResult[beer] || 0) + 1;
                        return copyResult;
                    });

                    return (
                        <div className="order-card" key={orders.id}>
                            <div>
                                <h3 className="order-number"> {`ID #${orders.id}`}</h3>
                            </div>
                            <ul>
                                {Object.entries(copyResult).map(([key, value]) => {
                                    return (
                                        <li key={orders.id + Math.random()} className="order-beer">
                                            {value === 1 ? "1 x" : `${value} x`} {key}{""}
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
