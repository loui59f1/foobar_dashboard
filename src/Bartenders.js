import BartenderRow from "./BartenderRow.js";

export default function Bartenders({ bartenders }) {
  const bartenderList = bartenders.map(bartender => (
    <BartenderRow bartender={bartender} key={bartender.name} />
  ));

  return (
    <div className="bartenders card">
      <h1>Bartenders</h1>
      <div className="bartenders_amount">
        <p>3 at work</p>
      </div>
      <div className="bartenderlist">{bartenderList}</div>
    </div>
  );
}
