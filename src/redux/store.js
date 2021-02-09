import { createStore } from 'redux';
import cakeReducer from './cake/cakeReducer';

export const store = createStore(cakeReducer);