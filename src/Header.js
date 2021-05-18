export default function Header({ bar }) {
    return (
        <header>
            <p>{bar.name}</p>
            <p>Closing at {bar.closingTime}</p>
        </header>
    );
}