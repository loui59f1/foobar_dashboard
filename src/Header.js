export default function Header({ foobar }) {
  // Closing time countdown

  let today = new Date(foobar.timestamp);
  let todayDate = today.getDate();
  let todayMonth = today.getMonth() + 1;
  let todayYear = today.getFullYear();
  // set dato vi tæller ned til
  let countDownDate = new Date(
    `${todayMonth} ${todayDate}, ${todayYear} ${foobar.bar.closingTime}`
  ).getTime();

  let currentTime = new Date().getTime();

  // udregne tidsforskel
  let countdownCalc = countDownDate - currentTime;

  //udregner timer og minutter
  let hours = Math.floor(
    (countdownCalc % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((countdownCalc % (1000 * 60 * 60)) / (1000 * 60));

  let closingHours = (hours < 10 ? "" : "") + hours;
  let closingMinutes = (minutes < 10 ? "0" : "") + minutes;
  let openHours =
    "Closing in " + closingHours + " hours and " + closingMinutes + " minutes";

  if (hours < 1 && minutes < 1) {
    openHours = "Closed";
  }

  return (
    <header>
      <div className="nav_logo_time">
        <img src={`img/foobar_logo.png`} className="logo" alt="Logo" />
        <div className="info closingtime">{openHours}</div>
      </div>
      <div className="dashboard_navigation">
        <button className="notification_btn"></button>
        <button className="mail_btn"></button>
        <button className="settings_btn"></button>
        <button className="info_btn"></button>
        <button className="nav_btn"></button>
      </div>
    </header>
  );
}
