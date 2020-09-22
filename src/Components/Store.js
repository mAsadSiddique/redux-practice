import { createStore } from 'react-redux';
import CounterReducer from './CounterReducer';

const store = createStore(CounterReducer);

export default store;