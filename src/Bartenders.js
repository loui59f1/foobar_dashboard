export default function Bartenders({ bartenders }) {

    const bartenderList = bartenders.map((bartender) => <BartenderRow bartender={bartender} key={bartender.name} />);

    return (
        <div className="Bartenders">
            <h1>Bartenders</h1>
            <div className="BartenderList">{bartenderList}</div>
        </div>
    );
}

function BartenderRow({ bartender }) {
    let bartenderServing = "";
    if (bartender.servingCustomer === null) {
        bartenderServing = "";
    } else {
        bartenderServing = "#" + bartender.servingCustomer;
    }

    // Burde minifyes og uppercase/lowercase

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

    let bgColorStatus = '#00B818';

    if (bartender.status === "WORKING") {
        bgColorStatus = '#25c23a';
    } else {
        bgColorStatus = '#FFAF06';
        bartenderStatusDetail = "Ready";
    }

    let tapStatus = "";
    if (bartender.usingTap === 0 || bartender.usingTap === null) {
        tapStatus = "";
    } else {
        tapStatus = "Using tap " + bartender.usingTap;
    }

    return (
        <div className="BartenderRow">
            <div className="bartender_img">
                <img src={`./img/icon_bartender.svg`} alt="Bartender" />
                <div className="bartender_status" style={{
                    backgroundColor: bgColorStatus,
                }}></div>
            </div>
            <div className="bartender_details">
                <h3>{bartender.name}</h3>
                <p>{bartenderStatusDetail}</p>
                <p>{tapStatus}</p>
            </div>
            <div className="bartender_order_id">
                <p>{bartenderServing}</p>
            </div>
        </div >
    );
}