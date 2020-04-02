import { combineReducers, createStore } from 'redux';

import searchReducer from './searchReducer';
import addEventReducer from './addEventReducer';
import lentaReducer from './lentaReducer';
import eventProfileReducer from './eventProfileReducer';
import authReducer from './authReducer';

const reducers = combineReducers({
    searchPage: searchReducer,
    addEventPage: addEventReducer,
    lentaPage: lentaReducer,
    EventProfilePage: eventProfileReducer,
    auth: authReducer
});

const store = createStore(reducers);

window.store = store;

export default store;