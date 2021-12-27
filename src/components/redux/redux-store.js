import { combineReducers, createStore } from 'redux';
import taskListReducer from './TaskList-reducer';

const reducers = combineReducers({
	taskListReducer,
});

const store = createStore(reducers);
window.store = store;
export default store;
