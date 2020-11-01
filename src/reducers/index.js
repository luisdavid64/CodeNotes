import workingText from './workingText';
import fileReducer from './fileReducer';
import counter from './counter';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    workingText,
    fileReducer,
    counter
});

export default allReducers;