import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { reducer } from "./reducer";

const rootReducer = combineReducers({
  reducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
