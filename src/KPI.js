export default function KPINumbers({ queue, serving, beersServed, totalAmount, customersServed }) {
  //finding estimated time
  const queueObject = {};
  queueObject.count = 0;
  queueObject.amount = 0;

  //map through orders in queue
  queue.forEach((order) => {
    queueObject.amount = order.order.length;
    queueObject.count += queueObject.amount;
  });

  serving.forEach((order) => {
    queueObject.amount = order.order.length;
    queueObject.count += queueObject.amount;
  });

  let estimatedTime = 0.5 * queueObject.count;


  let myCurrentDate = new Date()
  let date = myCurrentDate.getDate();
  let month = myCurrentDate.getMonth() + 1;
  let year = myCurrentDate.getFullYear();

  return (
    <div className="KPI card">
      <h1>KPI</h1>
      <div className="kpi_date">
        <p>{date} - {month < 10 ? `0${month}` : `${month}`} - {year}</p>
      </div>
      <div className="row">
        <div className="sales_day">
          <h2>{totalAmount} DKK</h2>
          <p>Sales of the day</p>
        </div>
        <div className="beers_sold">
          <h2>{beersServed}</h2>
          <p>Beers sold today</p>
        </div>
      </div>
      <div className="row">
        <div className="queue_time">
          <h2>{estimatedTime} min</h2>
          <p>Average queue time</p>
        </div>
        <div className="orders_kpi">
          <h2>{customersServed}</h2>
          <p>Orders today</p>
        </div>
      </div>
    </div>
  );
}
