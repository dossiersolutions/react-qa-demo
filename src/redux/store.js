import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers";

import { createLogger } from 'redux-logger';

const logger = createLogger({
    // config
});

export default createStore(rootReducer, applyMiddleware(logger));