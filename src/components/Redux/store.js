import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {};
const middleware = [];

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export const persistor = persistStore(store)