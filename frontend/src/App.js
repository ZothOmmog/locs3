import React from 'react';
import { Route } from 'react-router-dom';
import style from './App.module.css';
import {Header, Navbar, SearchContainer, LentaContainer, AddEventContainer, Registration} from './components/indexComponents.js';

function App() {
  return (
    <div className={style.App}>
      <Header />
      <Navbar />
      <SearchContainer />
      <Route
        path='/Lenta'
        render={ () => <LentaContainer /> }
      />
      <Route
        path='/AddEvent'
        render={ () => <AddEventContainer /> }
      />
      <Route
        path='/Registration'
        render={ () => <Registration /> }
      />
    </div>
  );
}

export default App;