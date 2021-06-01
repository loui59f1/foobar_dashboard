export default function Header({ foobar }) {
  let today = new Date(foobar.timestamp);
  let todayDate = today.getDate();
  let todayMonth = today.getMonth() + 1;
  let todayYear = today.getFullYear();
  // set dato vi tæller ned til
  let countDownDate = new Date(`${todayMonth} ${todayDate}, ${todayYear} ${foobar.bar.closingTime}`).getTime();

  let currentTime = new Date().getTime();

  // udregne tidsforskel
  let countdownCalc = countDownDate - currentTime;

  //udregner timer og minutter
  let hours = Math.floor((countdownCalc % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((countdownCalc % (1000 * 60 * 60)) / (1000 * 60));

  let closingHours = (hours < 10 ? "0" : "") + hours;
  let closingMinutes = (minutes < 10 ? "0" : "") + minutes;

  return (
    <header>
      <img src={`img/foobar_logo.svg`} className="logo" alt="Logo" />
      <div className="info closingTime">
        Closing in {closingHours} h {closingMinutes} min
      </div>
      <div className="dashboard_navigation">
        <button className="notification_btn"></button>
        <button className="mail_btn"></button>
        <button className="settings_btn"></button>
        <button className="info_btn"></button>
      </div>
    </header>
  );
}
