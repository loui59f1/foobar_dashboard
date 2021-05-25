export default function Orders({ queue }) {
  const orderList = queue.map((order) => <Order order={order} />);

  return (
    <div className="Orders">
      <h1>Incoming orders</h1>
      <div className="OrderList">{orderList}</div>
    </div>
  );
}

function Order({ order }) {
  // Hvordan får vi håndteret flere af samme øl?
  // Ex. 2 x Mowintime, 1 x El Hefe don no

  return (
    <div className="Order">
      <h3>Order id: {order.id}</h3>
      <p>{order.order}</p>
      <p>Table number</p>
    </div>
  );
}
