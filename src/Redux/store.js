import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { cityReducer } from "./City/reducer";
import { countryReducer } from "./Country/reducer";

const rootReducer = combineReducers({
  country: countryReducer,
  city: cityReducer,
});

export const store = createStore(
  rootReducer, applyMiddleware(thunk)
);
