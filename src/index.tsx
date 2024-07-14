import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '@components/header';
import LocationList from './components/location-list/location-list';
import PlacesSorting from './components/places-sorting/places-sorting';
import MainPage from './components/main/main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Header/>
    <MainPage/>
  </React.StrictMode>
);
