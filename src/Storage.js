import React from 'react';
import { VictoryPie } from 'victory';

export default function Storage({ storage, taps }) {

    const storageList = storage.map((beer) => <StorageBeer beer={beer} />);
    const tapList = taps.map((tap) => <StorageTapBeer tap={tap} />);

    // Vi får fejl i konsollen pga. den ikke kan finde storage og taps til at starte med

    return (
        <div className="Storage">
            <div className="StorageList">
                <h1>Storage Beer</h1>
                {storageList}
            </div>
            <div className="TabList">
                <h1>Tap Beer</h1>
                {tapList}
            </div>
        </div>
    );
}

function StorageBeer({ beer }) {
    return (
        <div className="StorageBeer">
            <h3>{beer.name}</h3>
            <p>Amount {beer.amount}</p>
        </div>
    );
}

function StorageTapBeer({ tap }) {
    const percentage = (tap.level * 100) / tap.capacity;
    return (
        <div className="StorageTapBeer">
            <h3>{tap.beer}</h3>
            <p>Level {tap.level} out of {tap.capacity}</p>
            <p>Percentage: {percentage}%</p>
            <DiagramStorageData percentage={percentage} />
        </div>
    );
}

class DiagramStorageData extends React.Component {

    render() {
        return (
            <div className="pie">
                <text className="percentage_text" textAnchor="middle" >
                    {this.props.percentage}%
                </text>
                <VictoryPie
                    padAngle={0}
                    // used to hide labels
                    labelComponent={<span />}
                    innerRadius={70}
                    width={200} height={200}
                    data={[{ 'key': "", 'y': this.props.percentage }, { 'key': "", 'y': (100 - this.props.percentage) }]}
                    colorScale={["#19B3A6", "#EEEEEE"]}
                />
            </div>
        )
    }
}