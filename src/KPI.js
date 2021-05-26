export default function KPINumbers({ queue }) {
    return (
        <div className="KPI">
            <h1>KPI</h1>
            <div className="order_queue">
                <p>Orders in queue</p>
                <h2>{queue.length}</h2>
            </div>
            <div className="sales_day">
                <p>Sales of the day</p>
                <h2>10</h2>
            </div>
        </div>

    );
}