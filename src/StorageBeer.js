function StorageBeer({ beer }) {
  const totalItems = beer.amount;

  const items = new Array(totalItems).fill(null);

  return (
    <div className="StorageBeer">
      <h3>{beer.name}</h3>
      <div className="amounts">
        {items.map((_, id) => (
          <div className="amountbox" key={id}></div>
        ))}
      </div>
    </div>
  );
}

export default StorageBeer;
