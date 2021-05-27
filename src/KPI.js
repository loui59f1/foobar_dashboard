export default function KPINumbers({ queue, beersServed, totalAmount, customersServed }) {


    return (
        <div className="KPI">
            <div className="row">
                <div className="order_queue">
                    <h2>{queue.length}</h2>
                    <p>Orders in queue</p>
                </div>
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
                <div className="orders_kpi">
                    <h2>{customersServed}</h2>
                    <p>Orders today</p>
                </div>
                <div className="queue_time">
                    <h2>2 min.</h2>
                    <p>Average queue time</p>
                </div>
                <div className="">
                    <h2>14</h2>
                    <p>Something</p>
                </div>
            </div>
        </div>

    );
}