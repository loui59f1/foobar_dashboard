import StorageBeer from "./StorageBeer.js";
import StorageTapBeer from "./StorageTapBeer.js";

export default function Storage({ storage, taps }) {
  const storageList = storage.map(beer => (
    <StorageBeer beer={beer} key={beer.name} />
  ));
  const tapList = taps.map(tap => <StorageTapBeer tap={tap} key={tap.id} />);

  // Vi får fejl i konsollen pga. den ikke kan finde storage og taps til at starte med

  return (
    <div className="storage">
      <div className="storagelist card">
        <div className="storage_list disable-scrollbars">
          <div className="overlay_storage"></div>
          {storageList}
        </div>
      </div>
      <div className="tablist card disable-scrollbars">
        {/* <h1>Taps</h1> */}
        <div className="taplist">{tapList}</div>
      </div>
    </div>
  );
}
