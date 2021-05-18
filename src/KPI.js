export default function KPINumbers({ queue }) {
    return (
        <div className="KPI">
            <h1>KPI</h1>
            <p>Orders in queue</p>
            <h2>{queue.length}</h2>
        </div>
    );
}