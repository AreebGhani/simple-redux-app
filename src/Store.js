
import { createStore } from "redux";

import rootReducer from "./Reducer/index";

const store = createStore(rootReducer, window._REDUX_DEVTOOL_EXTENSION_ && window.__REDUX_DEVTOOL_EXTENSION_() );

export default store;