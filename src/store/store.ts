
import { createStore } from 'redux';
import rootReducer from '../redux/reducers.ts';

const store = createStore(rootReducer);

export default store;
