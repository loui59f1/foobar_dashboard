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

    let bartenderStatus = "";
    if (bartender.statusDetail === "reserveTap") {
        bartenderStatus = "Reserving tap";
    } else if (bartender.statusDetail === "pourBeer") {
        bartenderStatus = "Pouring beer";
    } else if (bartender.statusDetail === "receivePayment") {
        bartenderStatus = "Receiving payment";
    } else if (bartender.statusDetail === "startServing") {
        bartenderStatus = "Starting service";
    } else if (bartender.statusDetail === "releaseTap") {
        bartenderStatus = "Releasing tap";
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
                <img src="./public/img/beer_bottle.svg" alt="Bartender"></img>
            </div>
            <div className="bartender_details">
                <h3>{bartender.name}</h3>
                <p>{bartenderStatus}</p>
                <p>{tapStatus}</p>
            </div>
            <div className="bartender_order_id">
                <p>{bartenderServing}</p>
            </div>
        </div>
    );
}