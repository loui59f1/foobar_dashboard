function BartenderRow({ bartender }) {
  // Bartender serving ID
  let bartenderServing = "";
  if (bartender.servingCustomer === null) {
    bartenderServing = "";
  } else {
    bartenderServing = "#" + bartender.servingCustomer;
  }

  // Bartender status

  let bartenderStatusDetail = "";
  if (bartender.statusDetail === "reserveTap") {
    bartenderStatusDetail = "Reserving tap";
  } else if (bartender.statusDetail === "pourBeer") {
    bartenderStatusDetail = "Pouring beer";
  } else if (bartender.statusDetail === "receivePayment") {
    bartenderStatusDetail = "Receiving payment";
  } else if (bartender.statusDetail === "startServing") {
    bartenderStatusDetail = "Starting service";
  } else if (bartender.statusDetail === "releaseTap") {
    bartenderStatusDetail = "Releasing tap";
  } else if (bartender.statusDetail === "replaceKeg") {
    bartenderStatusDetail = "Replacing keg";
  }

  // Bartender status icon

  let bgColorStatus = "#00B818";

  if (bartender.status === "WORKING") {
    bgColorStatus = "#FFC85B";
  } else {
    bgColorStatus = "#94ECE0";
    bartenderStatusDetail = "Ready";
  }

  // Bartender tap status

  let tapStatus = "";
  if (bartender.usingTap === 0 || bartender.usingTap === null) {
    tapStatus = "";
  } else {
    tapStatus = "Using tap " + bartender.usingTap;
  }

  return (
    <div className="bartender-row">
      <div className="bartender_img">
        <img src={`./img/icon_bartender.svg`} alt="Bartender" />
        <div
          className="bartender_status"
          style={{
            backgroundColor: bgColorStatus,
          }}
        ></div>
      </div>
      <div className="bartender_details">
        <h3>{bartender.name}</h3>
        <p>{bartenderStatusDetail}</p>
        <p>{tapStatus}</p>
      </div>
      <div className="bartender_order_id">
        <p>{bartenderServing}</p>
      </div>
    </div>
  );
}

export default BartenderRow;
