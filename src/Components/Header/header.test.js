import React from 'react';
import { shallow } from 'enzyme';
import Header from './header.js';
import {findByDataTestAttribute} from '../../../Utils/index';

const setUp = (props={}) => {
    const component = shallow(<Header {...props}/>);
    return component;
}


describe('Header Component',() => {

    let component;

    beforeEach(() => {
        component = setUp();
    })

    it('should render without errors',() => {
        const wrapper = findByDataTestAttribute(component,'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('should render a logo',() => {
        const logo = findByDataTestAttribute(component,'logoImg');
        expect(logo.length).toBe(1);
    });
});