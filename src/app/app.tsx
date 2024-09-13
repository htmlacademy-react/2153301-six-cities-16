import {AppRoute, CityMap} from '@constants';
import {OFFERS} from '@mocks/offers';
import {Route, Routes} from 'react-router-dom';
import MainPage from '@pages/main-page';
import FavoritePage from "@pages/favorites-page";
import ProtectRoute from "@components/protect-route/protect-route";

function App(): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<MainPage offers={OFFERS} locations={CityMap}/>}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <ProtectRoute>
            <FavoritePage offers={OFFERS}/>
          </ProtectRoute>
        }
      />

    </Routes>
  );
}

export default App;
