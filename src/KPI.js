import prices from "./prices.json";

export default function KPINumbers({ queue, serving }) {
  let lastIdCounted = 0;
  let beersServed = 0;
  let customersServed = 0;
  let totalAmount = 0;
  const duplicatesResult = {};

  // KPI - Total sales of day

  const allBeer = [];

  queue.forEach(orders => {
    orders.order.map(beer => {
      allBeer.push(beer);
      return allBeer;
    });
  });

  function findTotalSales(customer) {
    customer.order.map(beer => {
      duplicatesResult[beer] = (duplicatesResult[beer] || 0) + 1;
      return duplicatesResult;
    });
    let obj = Object.entries(duplicatesResult).map(([key, value]) => {
      return { value, name: key };
    });

    const allOrders = obj.map(order => {
      // Creating a new object and mapping through matches in prices
      const priceObject = prices.find(item => item.name === order.name);
      // Creating a property 'price' with calculated result
      order.price = priceObject.price * order.value;
      return order;
    });

    const totalArr = allOrders.map(beer => {
      const priceObject = beer.price;

      return priceObject;
    });

    const totalAmountNumber = totalArr.reduce(
      (previousScore, currentScore, index) => previousScore + currentScore,
      0
    );

    totalAmount = totalAmountNumber;
  }

  // KPI - Customer served and beers sold today

  serving.forEach(customer => {
    if (customer.id > lastIdCounted) {
      beersServed += customer.order.length;
      customersServed++;
      findTotalSales(customer);
      lastIdCounted = customer.id;
    }
  });

  // KPI - Current queue time

  const queueObject = {};
  queueObject.count = 0;
  queueObject.amount = 0;

  //map through orders in queue
  queue.forEach(order => {
    queueObject.amount = order.order.length;
    queueObject.count += queueObject.amount;
  });

  serving.forEach(order => {
    queueObject.amount = order.order.length;
    queueObject.count += queueObject.amount;
  });

  let estimatedTime = 0.5 * queueObject.count;

  // KPI - Date

  let myCurrentDate = new Date();
  let date = myCurrentDate.getDate();
  let month = myCurrentDate.getMonth() + 1;
  let year = myCurrentDate.getFullYear();

  return (
    <div className="kpi card">
      <h1>KPI</h1>
      <div className="kpi_date">
        <p>
          0{date} - {month < 10 ? `0${month}` : `${month}`} - {year}
        </p>
      </div>
      <div className="row">
        <div className="sales_day">
          <h2>{totalAmount} DKK</h2>
          <p>Sales of the day</p>
        </div>
        <div className="orders_kpi">
          <h2>{customersServed}</h2>
          <p>Orders today</p>
        </div>
      </div>
      <div className="row">
        <div className="queue_time">
          <h2>{estimatedTime} min</h2>
          <p>Current queue time</p>
        </div>
        <div className="beers_sold">
          <h2>{beersServed}</h2>
          <p>Beers sold today</p>
        </div>
      </div>
    </div>
  );
}
