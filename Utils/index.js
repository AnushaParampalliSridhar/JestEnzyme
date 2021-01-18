import checkPropTypes from 'check-prop-types';
import {applyMiddleware,createStore} from 'redux';
import rootReducer from '../src/reducers/index';
import thunk from 'redux-thunk';

const middlewares = [thunk];

export const findByDataTestAttribute = (component,attributeValue) => {
    const result = component.find(`[data-test='${attributeValue}']`);
    return result;
}

export const checkProps = (component,expectedProps) => {
    const propsError = checkPropTypes(component.propTypes,expectedProps,'props',component.name);
    return propsError;
}

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer,initialState);
}