export default function Header({ bar }) {
    return (
        <header>
            <div className="logo">{bar.name}</div>
            <div className="info">Closing at {bar.closingTime}</div>
        </header>
    );
}