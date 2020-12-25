import { createStore } from 'redux';
import CounterReducer from './CounterRedux';

const store = createStore(CounterReducer);

export default store;