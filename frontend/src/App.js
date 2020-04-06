import React from 'react';
import { Route } from 'react-router-dom';
import style from './App.module.css';
import { HeaderContainer, Navbar, SearchContainer, LentaContainer, AddEventContainer, Registration, EventProfileContainer, AuthContainer } from './components/indexComponents.js';


function App() {
  return (
    <div className={style.App}>
      <HeaderContainer />
      <Navbar />
      <SearchContainer />
      <Route
        path='/Lenta'
        render={() => <LentaContainer />}
      />
      <Route
        path='/AddEvent'
        render={() => <AddEventContainer />}
      />
      <Route
        path='/Registration'
        render={() => <Registration />}
      />
      <Route
        path='/Auth'
        render={() => <AuthContainer />}
      />
      <Route
        path='/EventProfile/:eventId'
        render={() => <EventProfileContainer />}
      />
    </div>
  );
}

export default App;