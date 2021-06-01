import { VictoryPie, VictoryLabel } from "victory";
import React from "react";

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
        <p className="percentage_text">{this.props.percentage}%</p>
        <VictoryPie
          animate={{
            duration: 2000,
          }}
          padAngle={0}
          // used to hide labels
          labelComponent={<VictoryLabel verticalanchor="middle" />}
          innerRadius={70}
          width={200}
          height={200}
          data={[
            { key: "", y: this.props.percentage },
            { key: "", y: 100 - this.props.percentage },
          ]}
          colorScale={["#63C8BA", "rgba(238, 238, 238, 0.2)"]}
        />
      </div>
    );
  }
}

export default StorageTapBeer;
