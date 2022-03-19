import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import thunk from 'redux-thunk';

import trackerReducer from 'reducers/trackerReducer';

const reducers = combineReducers({
  tracker: trackerReducer,
});

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default store;
