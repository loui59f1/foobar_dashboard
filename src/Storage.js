import React from 'react';
import { VictoryPie, VictoryLabel } from 'victory';

export default function Storage({ storage, taps }) {

    const storageList = storage.map((beer) => <StorageBeer beer={beer} key={beer.name} />);
    const tapList = taps.map((tap) => <StorageTapBeer tap={tap} key={tap.id} />);

    // Vi får fejl i konsollen pga. den ikke kan finde storage og taps til at starte med

    return (
        <div className="Storage">
            <div className="StorageList card">
                <div className="storage_list disable-scrollbars">
                    <div className="overlay">
                        {storageList}
                    </div>
                </div>
            </div>
            <div className="TabList card">
                {/* <h1>Taps</h1> */}
                <div className="taplist">
                    {tapList}
                </div>
            </div>
        </div>
    );
}

function StorageBeer({ beer }) {



    const totalItems = beer.amount;

    const items = new Array(totalItems).fill(null);

    return (
        <div className="StorageBeer">
            <h3>{beer.name}</h3>
            <div className="amounts">
                {items.map((_, id) => <div className="amountbox" key={id}></div>)}
            </div>
        </div>
    );
}


function StorageTapBeer({ tap }) {
    const percentage = (tap.level * 100) / tap.capacity;
    return (
        <div className="StorageTapBeer">
            <h3>{tap.beer}</h3>
            <DiagramStorageData percentage={percentage} />
        </div>
    );
}

class DiagramStorageData extends React.Component {

    render() {
        return (
            <div className="pie">
                <p className="percentage_text">
                    {this.props.percentage}%
                </p>
                <VictoryPie
                    animate={{
                        duration: 2000
                    }}
                    padAngle={0}
                    // used to hide labels
                    labelComponent={<VictoryLabel verticalanchor="middle" />}
                    innerRadius={70}
                    width={200} height={200}
                    data={[{ 'key': "", 'y': this.props.percentage }, { 'key': "", 'y': (100 - this.props.percentage) }]}
                    colorScale={["#63C8BA", "rgba(238, 238, 238, 0.2)"]}
                />
            </div>
        )
    }
}