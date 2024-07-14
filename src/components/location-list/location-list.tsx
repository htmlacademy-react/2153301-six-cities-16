import {CITIES} from '@constants';
import LocationItem from '../location-item/location-item';

function LocationList(): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => <LocationItem city={city} key={city}/>)}
      </ul>
    </section>
  );
}

export default LocationList;
