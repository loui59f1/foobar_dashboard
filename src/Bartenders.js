export default function Bartenders({ bartenders }) {

    const bartenderList = bartenders.map((bartender) => <BartenderRow bartender={bartender} />);

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
        bartenderServing = "Serving order " + bartender.servingCustomer;
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
            <h3>{bartender.name}</h3>
            <p>{bartenderServing}</p>
            <p>{bartenderStatus}</p>
            <p>{tapStatus}</p>
        </div>
    );
}