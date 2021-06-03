import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import StorageBeer from "./StorageBeer.js";
import StorageTapBeer from "./StorageTapBeer.js";

import { Splide, SplideSlide } from '@splidejs/react-splide';


export default function Storage({ storage, taps }) {

  const storageList = storage.map(beer => (
    <StorageBeer beer={beer} key={beer.name} />
  ));
  const tapList = taps.map(tap => <SplideSlide key={tap.id}><div class="splide__slide__container"><StorageTapBeer tap={tap} key={tap.id} /></div></SplideSlide>);

  return (
    <div className="storage">
      <div className="storagelist card">
        <div className="storage_list disable-scrollbars">
          {storageList}
        </div>
      </div>
      <div className="tablist card disable-scrollbars">
        {/* <h1>Taps</h1> */}
        <Splide options={{
          rewind: true,
          perPage: 5,
          perMove: 2,
          gap: '1rem',
        }} onMoved={(splide, newIndex) => { console.log('moved', newIndex) }}
        >>
          {tapList}
        </Splide>
      </div>
    </div>
  );
}
