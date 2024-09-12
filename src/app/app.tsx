import {AppRoute, CityMap} from '@constants';
import {OFFERS} from '@mocks/offers';
import {Route, Routes} from 'react-router-dom';
import MainPage from '@pages/main-page';

function App(): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<MainPage offers={OFFERS} locations={CityMap}/>}
      />
      {/*<Route*/}
      {/*  path={AppRoute.Favorites}*/}
      {/*  element={*/}
      {/*    <ProtectRoute>*/}
      {/*      <FavoritePage offers={OFFERS} />*/}
      {/*    </ProtectRoute>*/}
      {/*  }*/}
      {/*/>*/}

    </Routes>
  );
}

export default App;
