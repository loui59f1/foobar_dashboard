export default function KPINumbers({ queue, totalAmount, beersServed }) {
    return (
        <div className="KPI">
            <div className="order_queue">
                <p>Orders in queue</p>
                <h2>{queue.length}</h2>
            </div>
            <div className="sales_day">
                <p>Sales of the day</p>
                <h2>{totalAmount}</h2>
            </div>
            <div className="beers_sold">
                <p>Beers sold today</p>
                <h2>10</h2>
            </div>
        </div>

    );
}