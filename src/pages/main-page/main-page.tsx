

import LocationList from '@components/location-list/location-list';
import PlacesSorting from '@components/places-sorting/places-sorting';
import PlacesList from '@components/places-list/places-list';

type MainPageProps = {
  offers: OfferPreview[];
  locations: typeof CityMap;
};

function MainPage({offers, location}): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationList/>
      </div>

      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>

            <PlacesSorting/>

            <div className="cities__places-list places__list tabs__content">

            </div>

          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
