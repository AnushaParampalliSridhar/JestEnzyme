import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import {findByDataTestAttribute,testStore} from '../Utils/index';

const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store}/>).childAt(0).dive();
    return wrapper;
}

describe('App Component', () => {
    let component;

    beforeEach(() => {
        const initialState = {
            posts : [{
                title : 'Example title 1',
                body : 'Some text'
            },{
                title : 'Example title 2',
                body : 'Some text'
            }]
        }
        component = setUp(initialState);
    })

    it('should render without errors', () => {
        const result = findByDataTestAttribute(component,'appComponent');
        expect(result.length).toBe(1);
    })
})