export default function Header({ bar }) {
    return (
        <header>
            <img src={`img/foobar_logo.svg`} className="logo" alt="Logo" />
            <div className="info closingTime">Closing in 01:58:24 </div>
            <div className="dashboard_navigation">
                <button className="notification_btn"></button>
                <button className="mail_btn"></button>
                <button className="settings_btn"></button>
                <button className="info_btn"></button>
            </div>
        </header>
    );
}