export default function Header({ bar }) {
    return (
        <header>
            <img src={`./img/foobar_logo.svg`} className="logo" alt="Logo" />
            <div className="info">Closing at {bar.closingTime}</div>
            <div className="dashboard_navigation">
                <button><span className="notification_btn"></span></button>
                <button><span className="notification_btn"></span></button>
                <button><span className="notification_btn"></span></button>
                <button><span className="notification_btn"></span></button>
            </div>
        </header>
    );
}